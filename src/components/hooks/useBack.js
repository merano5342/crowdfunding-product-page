
import { useReducer } from "react";


const initialState = {
  totalBacked: 89914,
  totalBackers: 5007,
  daysLeft: 56,

  bookmark: false,
  openModal: '',
  // , 'selectionModal', 'thanksModal'

  rewards: [
    {
      id: 1,
      idName: 'noReward',
      title: 'Pledge with no reward',
      minimum: 0,
      quality: 'unlimited',
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
    },
    {
      id: 2,
      idName: 'BambooStand',
      title: 'Bamboo Stand',
      minimum: 25,
      quality: 101,
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    },
    {
      id: 3,
      idName: 'BlackEditionStand',
      title: 'Black Edition Stand',
      minimum: 75,
      quality: 64,
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."

    },
    {
      id: 4,
      idName: 'MahoganySpecialEdition',
      title: 'Mahogany Special Edition',
      minimum: 200,
      quality: 0,
      text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    }

  ],
  selectedReward: '',
  userBacked: 0,

}

export type State = {
  totalBacked: Number,
  totalBackers: Number,
  daysLeft: Number,

  bookmark: Boolean,
  modal: Modal[],
  userBacked: Number,
}


const calcTotalBack = (totalBacked, userBacked) => {
  return totalBacked + userBacked
}

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
  }
}


export default function useBack() {
  return useReducer(backReducer, initialState)
}