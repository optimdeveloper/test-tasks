
import {SET_DATA } from "../types/index";


export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
export const acceptTask = (numero) => {
  return async (dispatch, getState) => {
    const {tasks} = getState().users;
    
    //verifications
    if(!tasks[0].completed && numero!==1){
      dispatch({
        type: "ADD_TOAST",
        toast: { type: "danger", message: 'Debe de completar primero la tarea 1!' },
      });
      return
    }
    let array = tasks.find((item) => item.numero === parseInt(numero));
    let index = tasks.findIndex(
      (item) => item.numero === parseInt(numero)
    );
    
    if (array.subnumeros.length > 0) {
      let new_arr = array.subnumeros.find(item=>item.numero===numero)
      let subindex = array.subnumeros.findIndex(
        (item) => item.numero === numero
      );
      if(index>2 && subindex===0 ){
        let arrayAnt = tasks.find((item) => item.numero === index);
      if(arrayAnt.subnumeros.some(item=>item.completed===false)){
        dispatch({
          type: "ADD_TOAST",
          toast: { type: "danger", message: `Debe de completar primero la tarea ${arrayAnt.subnumeros[arrayAnt.subnumeros.length-1].numero}!` },
        });
        return
      }
    }
      if(subindex!==0)
      if(!array.subnumeros[subindex-1].completed){
        dispatch({
          type: "ADD_TOAST",
          toast: { type: "danger", message: `Debe de completar primero la tarea ${array.subnumeros[subindex-1].numero} !` },
        });
        return
      }
      new_arr.completed=true
      array.subnumeros[subindex]=new_arr
      tasks[index].subnumeros = array.subnumeros
      if(tasks[index].subnumeros.every(item=>item.completed))
      tasks[index].completed=true
      dispatch(setData(tasks));
    } 
    else {
      tasks[index] =tasks.find((item) => item.numero ===numero);
      tasks[index].completed=true
      dispatch(setData(tasks));
    }
    dispatch({
      type: "ADD_TOAST",
      toast: { type: "success", message: 'Tarea completada!' },
    });
  };
};



