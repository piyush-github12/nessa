import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    type: "AC Light",
    name: "100W AC LED Flood Light",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/47d05b13a01e8499fe6ba817909c92b17b099f85e0d2e0b4c2d80fba1140b026?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
  {
    type: "AC Light",
    name: "100W AC LED Flood Light",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/003c02e16badd707fc2b7139d974b0e8344cc93c52449fde3308055b098f37cc?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
  {
    type: "AC Light",
    name: "100W AC LED Flood Light",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b145e85a10e4a2e47f30c6db6f1ab6b55b65976d98b84d10f1fd5750b3dedf47?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
  {
    type: "AC Light",
    name: "100W AC LED Flood Light",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/48b040255e2c29b697fd79389eb45f437fe43a40ffb76c299377a4d373ed7755?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
];

const categories = [
  {
    name: "AC LIGHTS",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6636a1b22c322361b3d14120c0051a55fd7703be9c50f69b7ae71132d1ce327b?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
  {
    name: "SOLAR LIGHTS",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cb153f3c65820bfed6602e66f278b82b810ae78a76d57eeaf158f6419d7789e3?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
  {
    name: "ELECTRONICS",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6fb089fdcf4c00883c08f82c18f248775ef9a15859c5ad4307b77676be2ba839?placeholderIfAbsent=true&apiKey=9e81aa38f410497c9d9b2fd7b1468bbe",
  },
];

export function ProductRange() {
  const renderCategoryCard = ({ name, image }, index) => (
    <div
      key={index}
      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
    >
      <div className="flex items-center relative flex-col grow justify-center px-5 py-10 text-lg font-semibold tracking-wide leading-relaxed text-center text-black min-h-[620px] max-md:px-5 max-md:py-10 max-md:mt-1 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-fit px-10 py-5 bg-white rounded-lg ">
          {name}
        </div>
      </div>
    </div>
  );

  const renderProductCard = ({ type, name, image }, index) => (
    <div key={index} className="flex flex-col  max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow pb-8 font-medium leading-snug border border-solid border-black border-opacity-30 max-md:mt-7">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-contain w-full aspect-[0.94]"
        />
        <div className="flex flex-col self-start mt-4 ml-3.5 max-md:ml-2.5">
          <div className="self-start text-base text-black text-opacity-60">
            {type}
          </div>
          <div className="mt-5 text-xl text-black">{name}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex relative flex-col items-center  py-14   mt-20 w-full h-fit max-md:mt-10 max-md:max-w-full"
      style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
    >
      <div className="relative text-4xl font-semibold leading-snug text-center text-black">
        Our <span className="text-blue-500">Product</span> Range
      </div>
      <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
      <div className="relative mt-7 text-xl px-[5vw] leading-8 text-center text-zinc-900 max-md:max-w-full">
        At Nessa, we don't just offer off-the-shelf products; we design and
        manufacture lighting solutions that adapt precisely to your unique
        requirements.
      </div>
      <div className="relative self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {categories.map((category, index) =>
            renderCategoryCard(category, index)
          )}
        </div>
      </div>
      <div className="relative self-stretch mt-16 px-[5vw] max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-4 gap-5 max-md:grid-col-2 max-sm:grid-cols-1 ">
          {products.map((product, index) => renderProductCard(product, index))}
        </div>
      </div>
      <Link
        to=""
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 mt-[50px] rounded-lg font-medium transition-colors"
      >
        View All Products
      </Link>
    </div>
  );
}
