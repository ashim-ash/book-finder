import React, { useState } from "react";
import { getBooks } from "../config/axios";
import Card from "./Card";
import { Toaster, toast } from "react-hot-toast";

function Searchbar() {
  const [Books, setBooks] = useState("");
  const [keyword, setKeyword] = useState("");

  //receives the user input and sets to a state
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  //api call to fetch book data , return the matched books data
  const handleSubmit = async (event) => {
    if (keyword.trim() !== "") {
      try {
        const data = await getBooks(keyword);
        setBooks(data);
      } catch (error) {
        toast.error("No Matching Books Found");
      }
    } else {
      toast.error("Enter a keyword");
      console.log("Please enter a search term");
    }
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div
        className="flex flex-wrap justify-center items-center h-[50vh] "
        style={{
          backgroundImage: `url('https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg')`,
        }}
      >
        <div className="flex flex-wrap px-16 gap-4">
          <input
            type="text"
            className="w-80 py-2  bg-amber-100 rounded-lg md:px-2 text-lg text-black cursor-pointer "
            onChange={handleInputChange}
            value={keyword}
            placeholder="  Books, Novels and much more"
          />
          <button
            onClick={handleSubmit}
            className="w-40 bg-gradient-to-r from-pink-500 to-black rounded-lg text-lg font-semibold text-white ml-20 py-2"
          >
            Search
          </button>
        </div>
      </div>

      <Card books={Books} />
    </div>
  );
}

export default Searchbar;
