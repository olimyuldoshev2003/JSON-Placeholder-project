import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPhotoById } from "../../reducers/pageState/pageState";
import { Button } from "@mui/material";

const Photo = () => {

   const { id } = useParams();
   const dispatch = useAppDispatch();
   const photoById = useAppSelector((store) => store.pageState.photoById);

   async function getPhoto() {
     try {
       const { data } = await axios.get(
         `https://jsonplaceholder.typicode.com/photos/${id}`
       );
       dispatch(setPhotoById(data));
     } catch (error) {
       console.log(error);
     }
   }

   useEffect(() => {
     getPhoto();
   }, []);

  return (
    <div className="max-w-[1440px] m-[0_auto] pt-[80px] px-[60px] min-h-[100vh]">
      <section className="section">
        <div className="for_btns flex items-center gap-5">
          <Link to={`/`}>
            <Button variant="outlined">Back to Home</Button>
          </Link>
          <Link to={`/photos`}>
            <Button variant="outlined">Back to Photos</Button>
          </Link>
        </div>
        <div className="for_texts_and_img flex flex-col gap-3 mt-[30px]">
          <div className="for_image flex justify-center">
          <img src={photoById.url} className="w-[300px] rounded-full" alt="" />
          </div>
          <h1 className="text-[rgb(90,89,89)] text-[20px] font-[500] text-center dark:text-[#fff]">
            {photoById.title}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Photo