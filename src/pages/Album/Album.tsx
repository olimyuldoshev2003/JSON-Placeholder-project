import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setAlbumById } from "../../reducers/pageState/pageState";
import { Button } from "@mui/material";

const Album = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()

    const albumById = useAppSelector((store)=>store.pageState.albumById)
    async function getAlbum() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${id}`
        );
        dispatch(setAlbumById(data));
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getAlbum();
    }, []);

  return (
    <div className="max-w-[1440px] m-[0_auto] pt-[80px] px-[60px] min-h-[100vh]">
      <section className="section">
        <div className="for_btns flex items-center gap-5">
          <Link to={`/`}>
            <Button variant="outlined">Back to Home</Button>
          </Link>
          <Link to={`/albums`}>
            <Button variant="outlined">Back to Albums</Button>
          </Link>
        </div>
        <div className="for_texts mt-[30px]">
          <h1 className="text-[#5a5959] text-[20px] font-[500] dark:text-[#fff]">
            {albumById.title}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Album;
