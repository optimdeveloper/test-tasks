import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../../Utils/constants";
import { acceptTask } from "../../Redux/actions/userAction";


export default function DetailCard({ numero}) {
  const dispatch = useDispatch();

 const acceptItem =()=>{
    dispatch(acceptTask(numero))
    history.push('/')
 }
    
  return (
    <div className="flex justify-center w-full pt-2">
        <button  onClick={acceptItem} className="bg-blue hover:bg-hover text-xl text-white py-2 px-4 border-[1px] rounded-[20px] text-center">
        Aceptar tarea # {numero}
      </button>
    </div>
  );
}
