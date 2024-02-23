import React from "react";
import {Link} from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks";

const Home = () => {
  const only5Posts = useAppSelector((store) => store.homeState.only5Posts);

  return (
    <div>
      <section className="section_1 px-[60px]">
        <h1 className="text-center text-[26px] font-[600]">Posts</h1>
        <div className="container_posts mt-[30px] flex flex-col gap-2">
          {only5Posts.map((item: any) => {
            return (
              <div key={item.id}>
                <Link to={`posts/${item.id}`} className="text-[16px] font-[600] text-[#180d47] underline">{item.title}</Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section_2"></section>
      <section className="section_3"></section>
      <section className="section_4"></section>
      <section className="section_5"></section>
      <section className="section_6"></section>
    </div>
  );
};

export default Home;
