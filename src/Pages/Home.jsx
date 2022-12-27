import React,{useEffect,useState}from 'react'
import { AiFillHome, AiOutlinePlaySquare } from 'react-icons/ai'
import { BiLibrary, BiSlideshow } from 'react-icons/bi'
import Card from '../components/Card'
import Loading from '../components/Loading'
import Tags from '../components/Tags'
import { useGetAllTrendingVideosQuery } from '../redux/YoutubeCore'

const Home = () => {
  const {data, isFetching,error} = useGetAllTrendingVideosQuery();
  const [videos, setVideos] = useState()
  const tags = [1,2,3,4,5,6,7,8,89,12,1,2,3,34,5,]
   useEffect(() => {
    
     if (data) {
      let videos = data.data
       setVideos(videos)
     }
     
    
   },data)
   if (isFetching) {
    return(
      
      <Loading/>
    )
   }
   
  return (
    
    <div className='flex w-full  h-max'>
      <div className="hidden  md:flex leftbar w-1/12 flex-col  h-full pt-3 pb-3 text-xl">
             <div className=' mb-6 mt-1 w-max  p-2 hover:bg-gray-100 hover:text-black first-letter:  items-center flex flex-col '>
              <AiFillHome className=' bg-inherit text-black'/>
              <small className=' text-xs font-extralight cursor-pointer'>Home</small>
            </div>
            <div className='mb-6  p-2 hover:bg-gray-100 w-max  items-center flex flex-col'>
              <BiSlideshow/>
              <small className=' text-xs font-extralight cursor-pointer'>Shorts</small>
            </div>
            <div className='mb-6  p-2 hover:bg-gray-100 w-max  items-left  flex flex-col cursor-pointer'>
              <AiOutlinePlaySquare/>
              <small className=' text-[8px] '>Subscriptions</small>
            </div>
            <div className='mb-6  p-2 hover:bg-gray-100 w-max  items-center flex flex-col cursor-pointer'>
              <BiLibrary/>
              <small className=' text-xs font-extralight'>Library</small>
            </div> 

      </div>
      <div className="rside w-full md:w-11/12 min-h-[100vh] overflow-hidden">
          <div className="tags flex justify-around mb-4">
              {tags?.map(tag => (<Tags/>))}
          </div>
      <div className="cards flex flex-wrap w-full justify-around items-center">
        {videos?.map(video=> <Card
        
        video={video}
        />)}
      </div>
      </div>
    </div>
  )
}

export default Home
