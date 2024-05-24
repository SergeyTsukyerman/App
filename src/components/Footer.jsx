// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Footer() {
  return (
    <Footer className="bg-slate-200 shadow-md">
      <div className="flex justify-around items-center">
        <h1 className="font-bold">
          <span className="text-blue-500 text-4xl">My</span>
          <span className="text-gray-600 text-4xl">Drone</span>
        </h1>
        <nav className="text-red-500">
          <div className="flex justify-around items-top">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Sign In</a>
            <a href="#">Profile</a>
          </div>
        </nav>
        <form className="bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent"
          />
        </form>
      </div>
    </Footer>
  );
}
