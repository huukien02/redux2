const initState = {
  users: ["user 01", "user 02", "user 03"],
  products: [],
};

const rootUser = (state = initState, action: any) => {
  switch (action.type) {
    case "DELETE_USER":
      let idDelete = action.payload.id;
      let newListUser = state.users.filter((item, index) => index !== idDelete);
      return { ...state, users: newListUser };

    case "ADD_USER":
      const newUser = action.payload.user;
      return { ...state, users: [...state.users, newUser] };

    case "UPDATE_USER":
      const idUpdate = action.payload.idUpdate;
      const userUpdate = action.payload.userUpdate;

      for (let i = 0; i < state.users.length; i++) {
        if (i == idUpdate) {
          state.users[i] = userUpdate;
        }
      }

      return { ...state, users: [...state.users] };

    default:
      return state;
  }
};
export default rootUser;
