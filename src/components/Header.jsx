// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md m-1 p-4">
      <div className="flex justify-around items-center">
        <Link to="/">
          <h1 className="font-bold">
            <span className="text-blue-500 text-4xl">My</span>
            <span className="text-gray-600 text-4xl">Drone</span>
          </h1>
        </Link>
        <ul className="flex gap-4 font-medium">
          <Link to="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Sign In</li>
          </Link>
          <Link to="/profile">
            <li className="hover:underline">Profile</li>
          </Link>
        </ul>

        <form className="bg-white p-2 rounded-lg flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent"
          />
          <FaSearch className="text-slate-500" />
        </form>
      </div>
    </header>
  );
}
