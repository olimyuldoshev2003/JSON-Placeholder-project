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

export const getOnly5Comments = createAsyncThunk(
  "homeApi/getOnly5Comments",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_start=0&_end=5`
      );      

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnly5Albums = createAsyncThunk(
  "homeApi/getOnly5Albums",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?_start=0&_end=5`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnly5Photos = createAsyncThunk(
  "homeApi/getOnly5Photos",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_end=5`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnly5Todos = createAsyncThunk(
  "homeApi/getOnly5Todos",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_start=0&_end=5`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnly5Users = createAsyncThunk(
  "homeApi/getOnly5Users",
  async function () {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_start=0&_end=5`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
