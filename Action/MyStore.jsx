import axios from "axios";
import React, { createContext, useReducer } from "react";

export const DataProvider = createContext();

const MyStore = ({ children }) => {

  const initialState = {
    userList: [],
    show: false,
    user: {
      id: "",
      name: "",
      age: "",
      email: "",
      address: "",
      image: "",
    },
  };

  // ================= REDUCER =================
  const reducerFun = (state, action) => {

    if (action.type === "allUser") {
      return { ...state, userList: action.payload };
    }

    if (action.type === "changeShow") {
      return { ...state, show: action.payload };
    }

    if (action.type === "addUser") {
      return { ...state, user: action.newUser };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducerFun, initialState);

  const API =
    "https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/api10am";

  // ================= API FUNCTIONS =================

  // GET all users
  const getAllUser = async () => {
    const res = await axios.get(API);
    dispatch({ type: "allUser", payload: res.data });
  };

  // SIGNUP user
  const createUser = async (user) => {
    await axios.post(API, user);
    getAllUser();
  };

  // EDIT user
  const updateUser = async (id, user) => {
    await axios.put(`${API}/${id}`, user);
    getAllUser();
  };

  // DELETE user
  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    getAllUser();
  };

  // MODAL CLOSE
  const handleClose = () => {
    dispatch({ type: "changeShow", payload: false });
  };

  // MODAL OPEN
  const handleShow = () => {
    dispatch({ type: "changeShow", payload: true });
  };

  return (
    <DataProvider.Provider
      value={{
        state,
        dispatch,
        getAllUser,
        createUser,
        updateUser,
        deleteUser,
        handleClose,
        handleShow,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export default MyStore;
