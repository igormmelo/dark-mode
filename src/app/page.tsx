"use client";

import { useState } from "react";
import { Botoes } from "./components/botoes";

const Page = () => {
  const [list, setList] = useState<string[]>([]);
  const [nameTask, setNameTask] = useState("");
  const handleclick = () => {
    if (nameTask === "") return;
    setList([...list, nameTask]);
    setNameTask("");
  };
  
  return (
    <div className=" max-w-[900px] w-full h-screen m-auto">
      <p className="text-[35px] text-center text-white bg-black rounded-t-[6px]">
        Lista de Tarefas
      </p>
      <div className="max-w-[900px] w-full text-center bg-black">
        <input
          type="text"
          placeholder="Digite a tarefa a ser adicionada"
          className="border-solid border-[2px] rounded p-3 m-2"
          value={nameTask}
          onChange={(event) => setNameTask(event.target.value)}
        />
        <button className="text-white" onClick={handleclick}>
          Adicionar
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <Botoes list = {list} setList={setList} item={item} index={index}/>
        ))}
      </ul>
    </div>
  );
};
export default Page;
