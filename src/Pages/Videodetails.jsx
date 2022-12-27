import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Tags from "../components/Tags";
import { useParams } from "react-router-dom";
import {
  AiOutlineDoubleRight,
  AiOutlineLike,
  AiOutlineRight,
} from "react-icons/ai";
import {
  useGetAllTrendingVideosQuery,
  useGetRelatedVideosQuery,
} from "../redux/YoutubeCore";
import Loading from "../components/Loading";

const Videodetails = () => {
  const RelVid = ({ video }) => (
    <div className=" w-full h-150px flex mb-5">
      <div className="md:w-2/4 mr-1 rounded overflow-hidden">
      <img className="w-full rounded object-cover h-full" src={video.thumbnail[1].url} alt="" />
        </div> 
        <div className="w-2/4 h-full flex flex-col justify-center "> 
        <small className=" font-bold mb-1">
        {video.title.slice(0,35)} ...
        </small>
        <small className=" font-extralight mb-1">{video.channelTitle}</small>
        <small className=" font-extralight mb-1">{Math.ceil(video.viewCount/1000000)} views {}</small>
        </div>
    </div>
  );
  const { id } = useParams();
  const pause = {
    channelTitle: "",
    channelThumbnail: [
      {
        url: "",
      },
    ],
    channelId: "",
    description: "",
    thumbnail: [
      {
        url: "",
      },
    ],
    title: "",
    videoId: "",
  };
  const { data, isFetching, error } = useGetAllTrendingVideosQuery();
  const {
    data: relatedVideos,
    isFetching: isFetchingVideos,
    error2,
  } = useGetRelatedVideosQuery();

  const [movie, setmovie] = useState(pause);
  const [dis, setDis] = useState(false);
  const [reldis, setrelDis] = useState(false);
  const [relatedVideo, setRelatedVideos] = useState([
    {
      authorThumbnail: [
        {
          url: "",
        },
      ],
      channelId: "",
      channelTitle: "",
      publishedTimeText: "",
      thumbnail: [
        {
          url: "",
        },
      ],
      title: "",
      viewCount: "",
    },
  ]);
  const {
    title: title2,
    viewCount: viewCount2,
    authorThumbnail,
    thumbnail: thumbnail2,
    channelId: channelId2,
    channelTitle: channelTitle2,
    publishedTimeText,
  } = relatedVideo;
  const arr = [1, 2, 3, 3, 3, 2, 5, 4, 23, 3, 4];
  useEffect(() => {
    if (arr.lenght > 6) {
      setright(true);
    }
    if (isFetching) {
      setmovie(pause);
    }

    if (relatedVideos) {
      setRelatedVideos(relatedVideos.data);
      setrelDis(true)
    }
    if (data) {
      let newdata = data.data;

      newdata.map((video) => {
        console.log(video.videoId, id);
        if (video.videoId === id) {
          setmovie(video);
          console.log(movie);
          setDis(true);
        }
      });
    }
  }, [data,relatedVideos]);
  console.log(relatedVideo);
  // const { snippet, statistics } = movie;
  // const { likeCount } = statistics;
  const {
    channelId,
    channelThumbnail,
    channelTitle,
    description,
    thumbnail,
    Title,
    viewCount,
    videoId,
  } = movie;
  // const { high } = thumbnails;
  // console.log(movie);
  const [right, setright] = useState(false);
  if (isFetching) {
    return (
      <Loading 
      />
    )
  }
  return (
    <div className=" w-full  md:flex  ">
      <div className="left w-full md:w-[75%]">
        <div className="videoPlayer w-full">
          {dis ? (
            <div className="player__inner ">
              <img
                src={thumbnail[2].url}
                className="object-fill w-full h-[400px]"
                alt=""
              />
              <h5 className="title mt-3 mb-1 font-semibold">{Title}</h5>
              <div className="profile w-full h-[50px] flex items-center mt-2 md:mt:0">
                <div className=" w-full flex-col md:flex justify-between">
                  <div className=" flex h-full  items-center">
                    <img
                      src={channelThumbnail[0].url}
                      className="w-[40px] h-[40px] object-cover rounded-[50%]"
                      alt=""
                    />
                    <div className=" flex flex-col title mb-1 font-semibold uppercase ml-2">
                      <h5 className=" font-bold text-gray-700">
                        {channelTitle}
                      </h5>
                      <small className=" font-light text-gray-400">12.5k</small>
                    </div>
                    <button className=" pt-1 pb-1 pl-2 pr-2 rounded-full ml-5 text-white bg-black">
                      Subscribe
                    </button>
                  </div>
                  <div className="stats flex  mt-2 mb-2 md:mt-0 md:mb-0">
                    <div className="likes rounded-full overflow-hidden flex bg-gray-200 justify-center items-center h-max pt-2 pb-2 pr-3 pl-3 w-max ">
                      <div className=" border-r text-xs bg-gray-200 border-gray-300 pl-3 pr-3  mr-3 text-black">
                        890
                      </div>
                      <div className=" pr-3 bg-inherit ">
                        <AiOutlineLike className=" text-lg bg-inherit " />
                      </div>
                    </div>
                    <div className="likes rounded-full overflow-hidden flex bg-gray-200 justify-center items-center h-max pt-2 pb-2 pr-3 pl-3 w-max  ml-3">
                      <div className=" text-xs bg-gray-200  pl-3 pr-3   text-black">
                        544
                      </div>
                    </div>
                    <div className="likes rounded-full overflow-hidden flex bg-gray-200 justify-center items-center h-max pt-2 pb-2 pr-3 pl-3 w-max  ml-3">
                      <div className=" text-xs bg-gray-200  pl-1 pr-1   text-black">
                        <BsThreeDots className=" text-sm bg-inherit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-3 mb-3 md:mt-0 desc w-full bg-gray-200 p-4 text-gray-900 font-medium text-sm">
                <span className=" font-bold bg-transparent ">
                  {" "}
                  {viewCount} Views{" "}
                </span>
                {description}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="right relative flex flex-col w-full md:w-[30%] ml-5 overflow-hidden">
        <div className=" hidden md:flex items-center mb-3">
          {arr.slice(0, 7)?.map((tag) => (
            <Tags />
          ))}
          {
            <div className=" w-[25px] cursor-pointer h-full right-0 absolute flex justify-center items-center">
              <AiOutlineRight className="  text-base  text-gray-500" />
            </div>
          }
        </div>

        {reldis ? (
          <div className=" w-full">
            {" "}
            {relatedVideo.map((vid) => (
              <RelVid 
              video ={vid}/>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Videodetails;
