const initialState = {
  users: [], // Default to empty array
  error: null, // Default to null
};

const userReducer = (state = initialState, action) => {
  console.log("Reducer Action:", action); // Log actions for debugging
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, error: null };
      
      case 'FETCH_USERS_SUCCESS':
  console.log("Updating Users State:", action.payload);
  return {
    ...state,
    users:  action.payload , // Ensure users is an array
    error: null,
  };

    case 'FETCH_USERS_FAILURE':
      console.log("Updating Error State:", action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
