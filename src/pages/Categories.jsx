import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/Context'
import FollowOn from '../components/FollowOn'
import Gif from '../components/Gif'

const Categories = () => {
  const [results, setResults] = useState([])
  const { category } = useParams()
  const { gf } = GifState()
  const fetchSearchResults = async () => {
    const { data } = await gf.gifs(category, category)
    setResults(data)
  }

  useEffect(() => {
    fetchSearchResults();
  }, [category])
  return (
    <div className='flex flex-col sm:flex-row gap-5 my-4'>
      <div className='w-full sm:w-72'>
        {results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className='text-gray-400 text-sm pt-2 '>Don't tell it to me,GIF it to me!</span>
        <FollowOn />
        <div className='divider'></div>
      </div>
      <div>
        <h2>{category.split('-').join('&')} GIFs</h2>
        <h2 className='text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer'>
          @{category}
        </h2>
        {results.length > 0 && (
          <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
            {results.slice(1).map((gif) => {
              return <Gif gif={gif} key={gif.title} />
            })}
          </div>
        )}
      </div>


    </div>
  )
}

export default Categories