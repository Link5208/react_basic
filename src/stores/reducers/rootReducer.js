const initState = {
  users: [
    { id: 1, name: "Long" },
    { id: 2, name: "Link" },
    { id: 3, name: "Hoang" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("run into delete user:", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
      break;

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1001);
      let user = { id: id, name: `random ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
      break;
    default:
      break;
  }
  return state;
};
export default rootReducer;
