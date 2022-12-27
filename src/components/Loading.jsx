import React from "react";
import './loading.css'
const Loading = () => {
    console.log("we are loading")
  return (
    <div className=" w-full h-[100vh] flex justify-center items-center">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
