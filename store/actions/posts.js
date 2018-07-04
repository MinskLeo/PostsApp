import { ADD_POST, DELETE_POST, EDIT_POST, SELECT_POST, DESELECT_POST } from './actionTypes'

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

export const deletePost = (index) => {
  return {
    type: DELETE_POST,
    index
  }
}