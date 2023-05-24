import React from "react";
import { history } from "../../Utils/constants";

export default function Card({ task }) {
  return (
   <div className="flex justify-center w-full">
      <div className="max-w-[300px] h-fit w-full m-2 bg-white border border-green-200 rounded-lg shadow">
        <div className="flex justify-center border-b-[1px] border-green-400 mt-2">
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            TAREA #{task.numero}
          </p>
        </div>
       {!task.completed ? <div>
        <div className="flex flex-col m-4">
          {task.subnumeros.length===0  &&
            <button
              onClick={() => history.push({ 
                pathname: '/accept',
                state: {numero:task.numero}
               })}
              className="bg-blue hover:bg-hover text-xl text-white py-2 px-4 border-[1px] rounded-[20px] text-center"
            >
              HACER TAREA #{task.numero}
            </button> 
          }
        </div>
        <div className="flex flex-col m-4">
          {task.subnumeros &&
            task.subnumeros.map((item) => {
                return !item.completed &&
             <button
             key={item.numero}
              onClick={() => history.push({ 
                pathname: '/accept',
                state: {numero:item.numero}
               })}
                className="bg-blue hover:bg-hover text-xl text-white py-2 px-4 border-[1px] rounded-[20px] text-center mb-4"
              >
                HACER TAREA #{item.numero}
              </button> 
          })}
        </div>
        </div> :
        <div className="flex justify-center m-4"> <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Todas las tareas completadas!
          </p></div>}
      </div>
    </div>
 
 
  );
}
