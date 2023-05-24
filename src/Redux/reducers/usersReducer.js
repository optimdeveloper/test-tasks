/* eslint-disable import/no-anonymous-default-export */
import {
  SET_DATA
} from "../types";

const initialState = {
  tasks: [
    {
      numero: 1,
      subnumeros: [],
      completed:false
    },
    {
      numero: 2,
      subnumeros: [],
      completed:false
    },
    {
      numero: 3,
      subnumeros: [{numero:3.1,completed:false}, {numero:3.2,completed:false}],
      completed:false
    },
    {
      numero: 4,
      subnumeros: [{numero:4.1,completed:false},{numero:4.2,completed:false},{numero:4.3,completed:false}],
      completed:false
    },
    {
      numero: 5,
      subnumeros: [{numero:5.1,completed:false},{numero:5.2,completed:false}],
      completed:false
    },
    {
      numero: 6,
      subnumeros: [],
      completed:false
    },
  ],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};
