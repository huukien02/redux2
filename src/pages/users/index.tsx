import { Box, Button, TextField, Typography } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { test } from "../../store/action/users";
import { deleteUser } from "../../store/action/users";

function Users(props: any) {
  const { dataUser } = props;

  const [user, setUser] = useState(String);
  const [idUpdate, setIdUpdate] = useState(Number);
  const [showBtn, setShowBtn] = useState(true);

  // ADD
  const hanldeAddUser = () => {
    const payload = {
      user: user,
    };
    props.addUser(payload);
    setUser("");
  };

  // DELETE
  const handleDeleteUser = (index: number) => {
    const payload = {
      id: index,
    };
    props.deleteUser(payload);
  };

  // UPDATE
  const handleUpdateUser = (item: any, id: number) => {
    setIdUpdate(id);
    setUser(item);
    setShowBtn(false);
  };

  const updateUsers = () => {
    const payload = {
      idUpdate: idUpdate,
      userUpdate: user,
    };
    props.updateUser(payload);
    setUser("");
    setShowBtn(true);
  };

  const click = () => {
    const payload = {
      id: 1,
    };
    deleteUser(payload);

    // test("kien");
  };

  return (
    <Box>
      <button onClick={click}>click</button>
      <TextField
        sx={{ width: "300px" }}
        label="Enter value"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {showBtn ? (
        <Button
          sx={{
            width: "100px",
            height: "30px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          variant="outlined"
          startIcon={<Add />}
          onClick={hanldeAddUser}
        >
          ADD
        </Button>
      ) : (
        <Button
          sx={{
            width: "100px",
            height: "30px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          variant="outlined"
          endIcon={<Edit />}
          onClick={updateUsers}
        >
          UPDATE
        </Button>
      )}

      <Box sx={{ marginTop: "10px" }}>
        {dataUser.map((item: string, index: number) => {
          return (
            <Typography sx={{ marginTop: "10px" }}>
              {item}
              <Delete
                sx={{
                  color: "red",
                  cursor: "pointer",
                  marginLeft: "20px",
                  position: "relative",
                  top: "6px",
                }}
                onClick={() => handleDeleteUser(index)}
              />
              <Edit
                sx={{
                  color: "green",
                  cursor: "pointer",
                  marginLeft: "20px",
                  position: "relative",
                  top: "6px",
                }}
                onClick={() => handleUpdateUser(item, index)}
              />
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    dataUser: state.users,
    dataProduct: state.products,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteUser: (payload: object) => dispatch({ type: "DELETE_USER", payload }),
    addUser: (payload: object) => dispatch({ type: "ADD_USER", payload }),
    updateUser: (payload: object) => dispatch({ type: "UPDATE_USER", payload }),
  };
};

// const mapDispatchToProps = {
//   deleteUser,
//   addUser,
//   updateUser
// };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
