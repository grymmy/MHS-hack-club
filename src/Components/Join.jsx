import React from "react";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";

function Join() {
  debugger
  return (
    <div className="mx-5 lg:mx-20 box-border">

      <h1 className="text-white text-4xl mt-10">Join</h1>
      <div className="flex flex-row items-center mt-10">
        <p className="text-white text-3xl ">Thinking of joining MHS Hack Club?
Great! Unsure if we’re the club for you?
Here’s a three-point thesis statement
explaining why you should join us:</p>
      </div>
      <div className="flex flex-row items-center  mt-20">
        <img src={one} alt="" />
        <p className="text-white text-3xl ml-10">
        Beginners can learn basic computer
science skills without the pressure
of a traditional class
        </p>
      </div>
      <div className="flex flex-row items-center pt-10">
        <img src={two} alt="" />
        <p className="text-white text-3xl ml-10">
        Experienced programmers can
connect and collaborate on more
advanced projects
        </p>
      </div>
      <div className="flex flex-row items-center pt-10">
        <img src={three} alt="" />
        <p className="text-white text-3xl ml-10">
        Free. Stickers. Need we say more?
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe95N_MxtiiWM3XZB49AK-lUFF0Y6b0I-0jZr0JJScSPsBtmw/viewform?usp=sf_link"
        >
          <button className="bg-red-500 hover:bg-red-400 text-white mb-10 text-2xl lg:text-4xl font-bold py-8 px-10 rounded-[3rem]">
            Join Now
          </button>
        </a>
      </div>
      
    </div>
  );
}

export default Join;
