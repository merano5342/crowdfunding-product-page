
import { useReducer } from "react";


const initialState = {
  totalBacked: 89914,
  totalBackers: 5007,
  daysLeft: 56,

  bookmark: false,
  openModal: '',
  selectedReward: '',
  userBacked: 0,

  rewards: [
    {
      id: 1,
      idName: 'noReward',
      title: 'Pledge with no reward',
      minimum: 0,
      quantity: 'unlimited',
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
    },
    {
      id: 2,
      idName: 'BambooStand',
      title: 'Bamboo Stand',
      minimum: 25,
      quantity: 103,
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    },
    {
      id: 3,
      idName: 'BlackEditionStand',
      title: 'Black Edition Stand',
      minimum: 75,
      quantity: 64,
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."

    },
    {
      id: 4,
      idName: 'MahoganySpecialEdition',
      title: 'Mahogany Special Edition',
      minimum: 200,
      quantity: 0,
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    }
  ]
}

export type State = {
  totalBacked: number,
  totalBackers: number,
  daysLeft: number,

  bookmark: boolean,
  modal: Modal[],
  userBacked: number,
}


// const calcTotalBack = (totalBacked, userBacked) => {
//   return totalBacked + userBacked
// }

const backReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_BOOKMARK': {
      return {
        ...state,
        bookmark: !(state.bookmark)
      }
    }
    case 'OPEN_MODAL': {
      const modal = action.payload
      return {
        ...state,
        openModal: modal,
      }
    }
    case 'SELECT_REWARD': {
      const reward = action.payload
      return {
        ...state,
        selectedReward: reward
      }
    }
    case 'SUCCESS_BACK': {
      const userBacked = action.payload
      return {
        ...state,
        totalBackers: (state.totalBackers + 1),
        userBacked: userBacked,
        totalBacked: state.totalBacked + userBacked
      }
    }
    case 'UPDATE_QUANTITY': {
      const itemIdName = action.payload
      console.log(itemIdName)
      const rewards = state.rewards.map((item) => {
        if (item.idName === itemIdName) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        ...state,
        rewards: rewards
      }
    }
  }
}


export default function useBack() {
  return useReducer(backReducer, initialState)
}