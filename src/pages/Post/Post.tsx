import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPostById } from "../../reducers/pageState/pageState";
import { Button } from "@mui/material";

//For react icons
import { TiArrowBackOutline } from "react-icons/ti";

const Post = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const postById = useAppSelector((store) => store.pageState.postById);

  async function getPost() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(setPostById(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="max-w-[1440px] m-[0_auto] pt-[80px] px-[60px] min-h-[100vh]">
      {postById ? (
        <section className="section">
          <div className="for_btns flex items-center gap-5">
            <Link to={`/`}>
              <Button variant="outlined" endIcon={<TiArrowBackOutline />}>
                Back to Home
              </Button>
            </Link>
            <Link to={`/posts`}>
              <Button variant="outlined">Back to Posts</Button>
            </Link>
          </div>
          <div className="for_texts mt-[30px]">
            <h1 className="text-[#5a5959] dark:text-[#afacac] text-[22px] font-[700] text-center">
              {postById.title}
            </h1>
            <div className="block_paragraph mt-[10px]">
              <p className="text-[gray] text-center dark:text-[#fff] max-w-[1000px] m-[0_auto] font-[500]">
                {postById.body}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-[wheat]">...Loading</div>
      )}
    </div>
  );
};

export default Post;
