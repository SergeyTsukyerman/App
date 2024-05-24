// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-around items-center">
        <h1 className="font-bold">
          <span className="text-blue-500 text-4xl">My</span>
          <span className="text-gray-600 text-4xl">Drone</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent"
          />
        </form>
      </div>
    </header>
  );
}
