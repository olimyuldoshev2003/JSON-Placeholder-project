import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { Button } from "@mui/material";

const Todo = () => {

  const [todosById, setTodosById] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useParams()
  
  async function getTodosById() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      setTodosById(data)

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getTodosById()
  }, [])

  return (
    <div className="max-w-[1440px] m-[0_auto] pt-[80px] px-[60px] min-h-[100vh]">
      <div className="for_btns flex items-center gap-5 flex-wrap">
        <Link to={`/`}>
          <Button variant="outlined">Back to Home</Button>
        </Link>
        <Link to={`/todos`}>
          <Button variant="outlined">Back to Todos</Button>
        </Link>
      </div>
      <div className="container_todos flex justify-center items-center gap-2">
        <input type="checkbox" name="" id="" checked={todosById.completed} />
        <h1>{todosById.title}</h1>
      </div>
    </div>
  );
}

export default Todo