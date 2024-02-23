import React from "react";
import { Link, useLocation } from "react-router-dom";
import Switcher from "../Switch UI/Switcher";

const Header = () => {

  const location = useLocation()

  return (
    <div>
      <header className="header flex justify-between py-[20px] px-[60px]">
        <div className="first_block_header">
          <Link
            className={
              location.pathname === "/"
                ? `text-[gray] underline text-[17px] font-[600]`
                : `hover:text-[gray] hover:underline duration-[0.7s] text-[17px] font-[600]`
            }
            to={`/`}
          >
            Home
          </Link>
        </div>
        <nav className="second_block_header flex justify-center gap-3">
          <ul className="navbar flex justify-center gap-3 text-[17px] font-[600]">
            <li>
              <Link
                to={`/posts`}
                className={
                  location.pathname === "/posts"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                to={`/comments`}
                className={
                  location.pathname === "/comments"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Comments
              </Link>
            </li>
            <li>
              <Link
                to={`/albums`}
                className={
                  location.pathname === "/albums"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                to={`/photos`}
                className={
                  location.pathname === "/photos"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                to={`/todos`}
                className={
                  location.pathname === "/todos"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Todos
              </Link>
            </li>
            <li>
              <Link
                to={`/users`}
                className={
                  location.pathname === "/users"
                    ? `text-[gray] underline`
                    : `hover:text-[gray] hover:underline duration-[0.7s]`
                }
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <div className="third_block_header">
          <Switcher/>
        </div>
      </header>
    </div>
  );
};

export default Header;
