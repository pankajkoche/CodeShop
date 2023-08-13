import React from 'react';
import Preparation from '../../images/preparation.png'
import HomeCart from '../../images/homeCart.png'
import { homeCourseData } from '../../utils/data';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';

const HomePageContainer = () => {
     data=()=>{
      alert({homeCourseData})
     }
    return (
        <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-1 flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
          Interview preparation
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Preparation}
              className="w-full h-full object-contain"
              alt="Preparation"
            />
          </div>
        </div>

        <p className="text-[2rem] md:text-[2.5rem] font-bold tracking-wide text-headingColor">
        Want To boost your coding skill and join Top Mnc's.
          <span className="text-orange-600 text-[2rem] lg:text-[3rem]">
          Start With CodeShop
          </span>
        </p>

   

        <button
          type="button"
          onClick={data}
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Start Now
        </button>
      </div>


      <div className="py-2 flex-1 flex  relative">
        <img
          src={HomeCart}
          className="ml-auto w-full lg:w-auto h-420 
          rounded-lg lg:h-550" 
          alt="HomeCart"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-20
         py-2 gap-2 flex-wrap">
          
          {homeCourseData && homeCourseData.map((n) => (
            <Link to={n.link.toString()}>
              <div
                key={n.id}
                className="  lg:w-190 min-w-[190Px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col
                 items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-10 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                  
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>
              </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageContainer;