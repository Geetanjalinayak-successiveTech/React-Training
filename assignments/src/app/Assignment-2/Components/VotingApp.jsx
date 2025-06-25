"use client"
import { useReducer } from "react"


const initial = {
  A: 0,
  B: 0,
  C: 0
};

function voteReducer(state, action) {
  switch (action.type) {
    case 'VOTE_OPTION_A':
      return { ...state, A: state.A + 1 };
    case 'VOTE_OPTION_B':
      return { ...state, B: state.B + 1 };
    case 'VOTE_OPTION_C':
      return { ...state, C: state.C + 1 };
    default:
      return state;
  }
}