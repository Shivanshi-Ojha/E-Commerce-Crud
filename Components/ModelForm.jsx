import React, { useContext } from "react";
import { DataProvider } from "../Action/MyStore";
import { Button, Modal } from "react-bootstrap";

const ModelForm = () => {

  const {
    state: { show, user },
    dispatch,
    createUser,
    updateUser,
    handleClose,
  } = useContext(DataProvider);

  const handleSubmit = () => {
    if (user.id) {
      updateUser(user.id, user);
    } else {
      createUser(user);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {user.id ? "Edit User" : "Signup User"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {["name", "email", "age", "address", "image"].map((field) => (
          <input
            key={field}
            className="form-control mb-2"
            placeholder={field}
            name={field}
            value={user[field]}
            onChange={(e) =>
              dispatch({
                type: "addUser",
                newUser: {
                  ...user,
                  [e.target.name]: e.target.value,
                },
              })
            }
          />
        ))}

        <Button className="w-100 mt-2" onClick={handleSubmit}>
          {user.id ? "Update" : "Signup"}
        </Button>

      </Modal.Body>
    </Modal>
  );
};

export default ModelForm;
