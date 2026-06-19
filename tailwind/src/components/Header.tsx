import React from "react";

const Header = () => {
  return (
    <div className="bg-indigo-800 flex justify-between py-2 font-bold">
      <div className="flex flex-row gap-4 items-center ml-[10%] text-white mr-[2%]">
        <div> Fotobook </div>
        <input
          className="bg-white text-gray-700 placeholder:text-gray-400 rounded-sm px-2 py-1"
          placeholder="Search photo/album..."
        />
      </div>

      <div className="flex gap-8 mr-[10%]">
        <div className="flex flex-row gap-4">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            {" "}
            TN{" "}
          </div>
          <div className="text-white flex items-center justify-center">
            Thanh Nhân
          </div>
        </div>

        <div className=" text-white flex items-center justify-center">
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
