import React from "react";
import Navbar from "../../components/header/Navbar";
import PartnersReviewsSwiper from "../../components/partnerreviews/PartnersReviewsSwiper";

const SolutionDetail = ({SolutionDetail}) => {

    console.log(SolutionDetail)
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src="/images//solutionsImages/airportpageposter.png"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
          Airport Lighting Solution
        </h1>
      </div>

      {/* para for solution detail */}

      <div className="w-full flex gap-10 max-md:flex-col px-[5vw] py-[5vw]">
        <div className="w-1/2 ">
          <div className=" text-4xl font-semibold leading-snug text-black z-[2] relative">
            Illuminating Critical
            <span className="text-blue-500"> Aviation Spaces</span> with
            Precision and Safety
          </div>
          <div className="w-full ">
            <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
          </div>
          <div className="relative mt-7 text-xl  mb-4 leading-8 text-zinc-900 max-md:max-w-full">
            Nessa Illumination Technologies specializes in providing
            high-quality, reliable, and energy-efficient lighting solutions for
            airports globally. With a focus on both safety and efficiency, our
            products are designed to meet the demanding lighting requirements of
            airport facilities, including runways, taxiways, terminals, and
            parking areas. <br /> <br />
            At Nessa, we understand the importance of lighting in aviation,
            where precision, visibility, and operational efficiency are
            paramount. Through advanced research and development, we offer
            products that not only meet international safety standards but also
            help airports optimize energy consumption and reduce operational
            costs.
          </div>
        </div>

        <div className="w-1/2 bg-gray-900">
          <img className="w-full  bg-gray-600" src="" alt="" />
        </div>
      </div>

      {/* related products */}

      <div className="">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Sub-Applications and <br />
          <span className="text-blue-500"> Related Products</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>

      <div className="w-full px-[5vw] mx-auto my-6 mt-[50px] font-sans text-lg text-gray-800 ">
        <img className="w-[50px] h-[50px] bg-gray-400 rounded-full mb-4"  src="" alt="" />
        <div className="text-2xl font-bold">
          Runway and <span className="text-blue-500">Taxi Lighting</span>
        </div>
        <div className="mt-4 text-lg">
          <strong>Application:</strong> Ensuring visibility and safety for
          aircraft during takeoff, landing, and taxiing.
        </div>
        <div className="mt-6">
          <strong>Products:</strong>
          <div className="mt-2 space-y-4 ml-[40px]">
            <div>
              <strong> • LED Runway Edge Lights</strong>{" "}
              <span className="text-gray-600">(50-200W)</span>: Designed for
              high-intensity, long-distance visibility for pilots.
            </div>
            <div>
              <strong> • LED Taxiway Lights</strong>{" "}
              <span className="text-gray-600">(30-100W)</span>: Illuminates
              taxiway edges to guide aircraft safely during ground movements.
            </div>
            <div>
              <strong> • High Mast Lighting</strong>{" "}
              <span className="text-gray-600">(Up to 40M, 200-1000W)</span>:
              Provides wide-area illumination for taxiways and apron areas.
            </div>
          </div>
        </div>
      </div>


      {/* case studies */}
      <div className=" mt-[100px]">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
         Case 
          <span className="text-blue-500"> Studies</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center mt-[50px] ">

        <div className=" w-[20vw] h-[30vw] flex flex-col items-center ">
            <img className="bg-gray-400 h-[80%] " src="/images/solutionsImages/casestudy1.png" alt="" />
            
            <div className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md">Download</div>
        </div>
        <div className=" w-[20vw] h-[30vw] flex flex-col items-center ">
            <img className="bg-gray-400 h-[80%] " src="/images/solutionsImages/casestudy2.png" alt="" />
            
            <div className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md">Download</div>
        </div>
        <div className=" w-[20vw] h-[30vw] flex flex-col items-center ">
            <img className="bg-gray-400 h-[80%] " src="/images/solutionsImages/casestudy3.png" alt="" />
            
            <div className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md">Download</div>
        </div>
      </div> 

      {/* our clients */}
      <div className=" mt-[100px]">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Our
          <span className="text-blue-500"> Clients</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>
      <div className="w-full  flex items-center justify-center gap-20 mt-[50px]">
        
        {/* clients images path  */}
        {[
          "/images/homepageimages/partner1.png",
          "/images/homepageimages/partner2.png",
          "/images/homepageimages/partner3.png",
          "/images/homepageimages/partner2.png",
          "/images/homepageimages/partner1.png",
         
        ].map((image, index) => (
          <img key={index} className="w-[100px] h-[100px] bg-gray-400 rounded-full mb-4" src={image} alt="" />
        ))}
      </div>

      {/* partners revies */}
      <PartnersReviewsSwiper/>




     
    </div>
  );
};

export default SolutionDetail;
