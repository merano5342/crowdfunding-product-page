export const actionChangeBookmark = () => {
  return {
    type: 'CHANGE_BOOKMARK'
  }
}

export const actionOpenModal = (modal) => {
  return {
    type: 'OPEN_MODAL',
    payload: modal
  }
}

export const actionSelectReward = (reward) => {
  return {
    type: 'SELECT_REWARD',
    payload: reward
  }
}