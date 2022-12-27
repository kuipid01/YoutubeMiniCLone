import React , {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Videodetails from "../Pages/Videodetails";
const Card = ({video,left}) => {
  const {channelId,channelThumbnail,thumbnail,channelTitle,description,publishedText,title,viewCount,videoId} = video;
 const {url}= channelThumbnail;
   
  const [view, setview] = useState()
  const [see, setsee] = useState(false)

  const formatCount = (viewCount) => {
  
    
    if (viewCount>1000 || viewCount<10000) {
      let view= Math.ceil(viewCount/1000) 
      setview(view)
    
    }
  
    if (viewCount>1000  && viewCount<1000000) {
      let view= Math.ceil(viewCount/1000) 
 
      setview(`${view}k`)
    }
   
    if (viewCount>1000000 && viewCount<1000000000) {
      let view= Math.ceil(viewCount/1000000) 
  
      setview(`${view} m`)
    }
    
   
  }

useEffect(() => {
  formatCount(viewCount)
  
}, )
  return (
    <Link to = {`/video/${videoId}`}>
    
    <div className= {` ${left?"flex":""} hover:scale-[.98] transition-all cursor-pointer rounded-md gap-4 mb-2 ${left?"w-full":"w-full"} md:w-[250px]  ${left?"mb-3":""} m1-2 ${left?"h-[100px]":"h-[250px]"} `}>
      <div className= {` ${left?"w-2/4" : "w-full"} ${left?"h-full" :"h-2/4"}` }>
      <img
        className={`${left?"mr-0":""} w-full rounded-md  object-cover h-full `}
        src={thumbnail[0].url}
        alt=""
      />
      </div>
      
      <div className={`flex ${left?"w-2/4": "w-full"} ${left?"h-full":"h-2/4"} `}>
        <div className= {`${left?"" : "w-[50px] h-[50px] mr-3 mt-3 object-contain rounded-[50%] bg-red-300"}`} >
        <img src={channelThumbnail[0].url} className=" w-full h-full rounded-[50%]" alt="" />
        </div>

        <div className={` w-full flex flex-col ${left?" justify-center items-start":""}`}>
          <h3 className=  {`text-gray-700 font-bold text-xs ${left?"":"mt-2"} w-full `} >
          {title}
            </h3> 
            <small className=" text-gray-500 text-sm ">{channelTitle}</small>

            <small className=" text-gray-500 text-xs font-extralight">{view} Views - {publishedText}</small>
        
        </div>
      </div>
    </div>
   
   
    </Link>
  );
};


export default Card;
