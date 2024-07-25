import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { Button } from "@mui/material";

const Home = () => {
  const only5Posts = useAppSelector((store) => store.homeState.only5Posts);
  const only5Comments = useAppSelector(
    (store) => store.homeState.only5Comments
  );
  const only5Albums = useAppSelector((store) => store.homeState.only5Albums);
  const only5Photos = useAppSelector((store) => store.homeState.only5Photos);
  const only5Todos = useAppSelector((store) => store.homeState.only5Todos);
  const only5Users = useAppSelector((store) => store.homeState.only5Users);

  // console.log(only5Users);

  return (
    <div className="pt-[80px]">
      <section className="section_1 max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Posts</h1>
        <div className="container_posts mt-[30px] flex flex-col gap-2">
          {only5Posts.length ? (
            only5Posts.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`posts/${item.id}`}
                    className="text-[16px] font-[600] text-[#0d0d0e] hover:underline hover:text-[#180d47] duration-[0.7s] dark:text-[#bdbaba] dark:hover:text-[#fff]"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/posts`}>
            <Button variant="outlined">See more Posts</Button>
          </Link>
        </div>
      </section>
      <section className="section_2 mt-[40px] max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Comments</h1>
        <div className="container_comments mt-[30px] flex flex-col gap-3">
          {only5Comments.length ? (
            only5Comments.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`comments/${item.id}`}
                    className="p-[14px] block border-[1.5px] border-[#a3a3a3] hover:border-[#2b2a2a] dark:hover:border-[#fff] rounded-[8px] duration-[0.7s]"
                  >
                    <div className="block_1_comments">
                      <h1 className="">{item.name}</h1>
                    </div>
                    <div className="block_2_comments">
                      <Link to={``} className="">
                        {item.email}
                      </Link>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/comments`}>
            <Button variant="outlined">See more Comments</Button>
          </Link>
        </div>
      </section>
      <section className="section_3 mt-[40px] max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Albums</h1>
        <div className="container_posts mt-[30px] flex flex-col gap-3">
          {only5Albums.length ? (
            only5Albums.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`albums/${item.id}`}
                    className="text-[16px] font-[600] text-[#0d0d0e] hover:underline hover:text-[#180d47] duration-[0.7s] dark:text-[#bdbaba] dark:hover:text-[#fff]"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/albums`}>
            <Button variant="outlined">See more Albums</Button>
          </Link>
        </div>
      </section>
      <section className="section_4 mt-[40px] max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Photos</h1>
        <div className="container_photos mt-[30px] flex flex-col gap-3">
          {only5Photos.length ? (
            only5Photos.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`photos/${item.id}`}
                    className="p-[14px] border-[1.5px] border-[#a3a3a3] hover:border-[#2b2a2a] duration-[0.7s] rounded-[8px] flex items-center gap-4"
                  >
                    <div className="block_1_photos">
                      <img
                        src={item.url}
                        alt="Remu Sharp"
                        className="w-[40px] rounded-full"
                      />
                    </div>
                    <div className="block_2_photos">
                      <h1 className="text-[20px] font-[600]">Item {item.id}</h1>
                      <h1 className="">{item.title}</h1>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/photos`}>
            <Button variant="outlined">See more Photos</Button>
          </Link>
        </div>
      </section>
      <section className="section_5 mt-[40px] max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Todos</h1>
        <div className="container_todos mt-[30px] flex flex-col gap-3">
          {only5Todos.length ? (
            only5Todos.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 duration-[0.7s]"
                >
                  <div className="block_1_todos">
                    <input
                      type="checkbox"
                      name=""
                      checked={item.completed}
                      id=""
                      readOnly
                    />
                  </div>
                  <div className="block_2_todos">
                    <Link to={`todos/${item.id}`} className="">
                      {item.completed ? (
                        <h1 className="line-through text-[blue]">
                          {item.title}
                        </h1>
                      ) : (
                        <h1>{item.title}</h1>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/todos`}>
            <Button variant="outlined">See more Todos</Button>
          </Link>
        </div>
      </section>
      <section className="section_6 mt-[40px] max-w-[1440px] m-[0_auto] px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Users</h1>
        <div className="container_photos mt-[30px] flex flex-col gap-3">
          {only5Users.length ? (
            only5Users.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link
                    to={`users/${item.id}`}
                    className="p-[14px] border-[1.5px] border-[#a3a3a3] hover:border-[#2b2a2a] dark:hover:border-[#fff] duration-[0.7s] rounded-[8px] flex items-center gap-4"
                  >
                    <div className="block_1_photos">
                      <div className="w-[40px] h-[40px] grid place-content-center bg-[#b8b8b8] text-[#fff] rounded-full text-[20px] uppercase">
                        {item.name[0]}
                      </div>
                    </div>
                    <div className="block_2_photos">
                      <h1 className="text-[19px] font-[500]">{item.name}</h1>
                      <h1 className="">{item.email}</h1>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-[8px]">...Loading</div>
          )}
        </div>
        <div className="btn_for_more_posts flex justify-center mt-[40px]">
          <Link to={`/users`}>
            <Button variant="outlined">See more Users</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
