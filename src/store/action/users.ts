export const deleteUser = (payload: any) => async (dispatch: any) => {
  console.log(payload);
  dispatch({ type: "DELETE_USER", payload });
};

export const addUser = (payload: object) => async (dispatch: any) => {
  dispatch({ type: "ADD_USER", payload });
};

export const updateUser = (payload: object) => async (dispatch: any) => {
  dispatch({ type: "UPDATE_USER", payload });
};

export const test = (name: any) => {
  alert(name);
};
