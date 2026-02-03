import React, { useContext, useEffect } from "react";
import { DataProvider } from "../Action/MyStore";
import ModelForm from "./ModelForm";

const Deshboard = () => {

  const {
    state: { userList },
    dispatch,
    getAllUser,
    deleteUser,
    handleShow,
  } = useContext(DataProvider);

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      {/* <button
        className="btn btn-primary mb-3"
        onClick={() => {
          dispatch({
            type: "addUser",
            newUser: {
              id: "",
              name: "",
              email: "",
              age: "",
              address: "",
              image: "",
            },
          });
          handleShow();
        }}
      >
        Signup User
      </button> */}

      <table className="table text-center align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
              <td>{u.address}</td>

              <td>
                <img
                  src={u.image}
                  width="80"
                  height="80"
                />
              </td>

              <td>
                <button
                  className="btn btn-success btn-sm me-1"
                  onClick={() => {
                    dispatch({
                      type: "addUser",
                      newUser: u,
                    });
                    handleShow();
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-info btn-sm me-1"
                  onClick={() =>
                    alert(
                      `Name: ${u.name}\nEmail: ${u.email}\nAge: ${u.age}`
                    )
                  }
                >
                  Read
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModelForm />
    </>
  );
};

export default Deshboard;
