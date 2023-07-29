import React, { useState } from "react";

function Card({ books }) {
  return (
  <div className="flex flex-wrap mt-10 md:mx-40 ">
  {books && books?.items?.map((item, index) => (
    <div key={index}>
      <div className="rounded ml-20 md:ml-10 mx-5 my-7 w-60  overflow-hidden shadow-lg bg-slate-300">
        <img 
          className="w-full object-cover md:h-80 "
          src={item?.volumeInfo?.imageLinks?.thumbnail || "https://nordicdesign.ca/wp-content/uploads/2020/02/book-thumbnail-300x300.jpg"}
          alt="book"
        />
        <div >
          <div className="py-2 px-3 font-bold text-xl mb-2">{item?.volumeInfo?.title}</div>
          <p className="text-gray-700 text-base py-2 px-3">
            {item?.volumeInfo?.authors?.[0] || ""}
          </p>
        </div>
        <div className="px-2">
          <div className="py-2 px-3 inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2">
            Average Rating : {item?.volumeInfo?.averageRating || 0}
          </div>
        
        </div>
      </div>
    </div>
   
  ))}


  
  </div>
)}

export default Card;
