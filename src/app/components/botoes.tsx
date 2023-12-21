"use client"
import { useState } from 'react'
type Props={
    list: string[]
    setList: React.Dispatch<React.SetStateAction<string[]>>
    item: string;
    index: number
}
export const Botoes = ({list,setList,item,index}: Props)=>{
    const [validation,setValidation] = useState(false)
    return(
        <li
        key={index}
        className={`items-center flex justify-between px-[20px] border-solid border-[1px] border-[#353535] text-[18px] ${
          validation ? "bg-green-500" : " bg-[#f6f6c8]"
        }`}
      >
        {item}{" "}
        <div className="flex items-center">
        <button onClick={()=>(setValidation(!validation))}><img src="https://cdn-icons-png.flaticon.com/128/3285/3285799.png " className="w-[28px] h-[28px] object-contain mr-[5px]" alt="icone de concluir" /></button>
        <button onClick={()=>{ 
          const atualizando =  [...list]
          atualizando.splice(index,1)
          setList(atualizando)
        }}><img className="w-[25px] h-[23px] object-contain" src="https://cdn-icons-png.flaticon.com/128/7699/7699001.png" alt="icone de excluir" /></button>
        </div>
      </li>

    )
}