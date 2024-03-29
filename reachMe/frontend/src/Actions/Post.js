import axios from "axios";
import { proxy } from "../Utils/Utils";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "allPostRequest" });
    const data = await axios.get(`${proxy}/posts`, {
      withCredentials: true,
    });
    dispatch({ type: "allPostSuccess", payload: data.data.posts });
  } catch (error) {
    dispatch({ type: "allPostFailure", payload: error.response.data.message });
  }
};

export const getLikedPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "likedPostRequest" });
    const data = await axios.get(`${proxy}/posts/liked`, {
      withCredentials: true,
    });
    dispatch({ type: "likedPostSuccess", payload: data.data.posts });
  } catch (error) {
    dispatch({
      type: "likedPostFailure",
      payload: error.response.data.message,
    });
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "myPostRequest" });
    const data = await axios.get(`${proxy}/posts/me`, {
      withCredentials: true,
    });
    dispatch({ type: "myPostSuccess", payload: data.data.posts });
  } catch (error) {
    dispatch({ type: "myPostFailure", payload: error.response.data.message });
  }
};

export const addPost = (caption, img) => async (dispatch) => {
  try {
    dispatch({ type: "addPostRequest" });
    const data = await axios.post(
      `${proxy}/post/upload`,
      { caption, img },
      { withCredentials: true },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    dispatch({ type: "addPostSuccess", payload: data.data.message });
  } catch (error) {
    dispatch({ type: "addPostFailure", payload: error.response.data.message });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deletePostRequest" });
    const data = await axios.delete(`${proxy}/post/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deletePostSuccess", payload: data.data.message });
  } catch (error) {
    dispatch({
      type: "deletePostFailure",
      payload: error.response.data.message,
    });
  }
};

export const addLikes = (id) => async (dispatch) => {
  try {
    dispatch({ type: "addLikesRequest" });
    const data = await axios.put(
      `${proxy}/post/like/${id}`,
      { headers: { "Content-Type": "application/json" } },
      { withCredentials: true }
    );
    dispatch({ type: "addLikesSuccess", payload: data.data.message });
  } catch (error) {
    dispatch({
      type: "addLikesFailure",
      payload: error.response.data.message,
    });
  }
};

export const addComment = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: "addCommentRequest" });
    const data = await axios.post(
      `${proxy}/post/comment/${id}`,
      { comment },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "addCommentSuccess", payload: data.data.message });
  } catch (error) {
    dispatch({
      type: "addCommentFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "userPostRequest" });
    const data = await axios.get(`${proxy}/user/posts/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "userPostSuccess", payload: data.data.posts });
  } catch (error) {
    dispatch({ type: "userPostFailure", payload: error.response.data.message });
  }
};