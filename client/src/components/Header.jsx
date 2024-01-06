import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Mayank</span>
            <span className="text-slate-700 pl-1">Estates</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-7">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-400">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-slate-400">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
            ) : (
              <li className=" text-slate-700 hover:text-slate-400">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
