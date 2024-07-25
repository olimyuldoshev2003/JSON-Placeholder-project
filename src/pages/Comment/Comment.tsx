import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCommentById } from "../../reducers/pageState/pageState";
import { Button } from "@mui/material";

const Comment = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()

    async function getComment() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );

          
        dispatch(setCommentById(data));
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getComment();
    }, []);
    
    const commentById = useAppSelector((store) => store.pageState.commentById);

  return (
    <div className="max-w-[1440px] m-[0_auto] pt-[80px] px-[60px] min-h-[100vh]">
      <section className="section">
        <div className="for_btns flex items-center gap-5 flex-wrap">
          <Link to={`/`}>
            <Button variant="outlined">Back to Home</Button>
          </Link>
          <Link to={`/comments`}>
            <Button variant="outlined">Back to Comments</Button>
          </Link>
        </div>
        <div className="for_texts mt-[30px]">
          <h1 className="text-[#5a5959] dark:text-[#c0bfbf] text-[22px] font-[700] text-center">
            {commentById.name}
          </h1>
          <div className="block_paragraph mt-[10px] flex flex-col gap-3">
            <p className="text-[#636161] max-w-[1000px] dark:text-[#fff] m-[0_auto] text-[17px] font-[500]">
              {commentById.email}
            </p>
            <p className="text-[gray] dark:text-[#fff] text-center max-w-[1000px] m-[0_auto] font-[500]">
              {commentById.body}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comment;
