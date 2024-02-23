import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPostById } from "../../reducers/postsState/postsState";

const Post = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
    const postById = useAppSelector((store)=>store.postsState.postById)
    
  async function getPost() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
        console.log(data)
      dispatch(setPostById(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  
    return (
      <div className="px-[60px]">
        <section className="section">
          <h1 className="text-[#5a5959] text-[22px] font-[600]">{postById.title}</h1>
          <p className="">{postById.body}</p>
        </section>
      </div>
    );
};

export default Post;
