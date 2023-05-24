/* eslint-disable import/no-anonymous-default-export */
// Estado de los reducer de login
import {
    ADD_TOAST,
    DELETE_TOAST,
  } from "../types";
  
  const initialState = {
    toasts: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOAST: {
            return {
              ...state,
            toasts: [action.toast] 
              
            }
          }
          case DELETE_TOAST: {
         //   const updatedToasts = state.toasts.filter((e) => e.id !== action.id);
            return {
              ...state,
              toasts: [],
            };
          }
    
          default: {
            return state;
          }
    }
  };
  