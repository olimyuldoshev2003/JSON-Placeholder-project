import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOnly5Posts = createAsyncThunk(
  "homeApi/getOnly5Posts",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=0&_end=5`
      );


      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
