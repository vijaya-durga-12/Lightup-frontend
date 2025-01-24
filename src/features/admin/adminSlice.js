const initialState = {
    data:[]
  };
  
  // Admin reducer to handle the admin credentials
  const adminReducer = (state = initialState, action) => {
    console.log("Reducer Action:", action); // Log actions for debugging
    switch (action.type) {
      case 'FETCH_ADMIN_DATA':
        console.log("Updating Admin State:", action.payload);
        return {
          ...state,
         data: action.payload,  // Update with email from payload
           // Update with password from payload
        };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  