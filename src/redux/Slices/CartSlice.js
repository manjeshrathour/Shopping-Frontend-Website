const { createSlice } = require("@reduxjs/toolkit");

export const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state, action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !==action.payload);
            //idhar action.payload.id likhne ki jaroorat nahi hai
        },
    },
})

export const {add, remove}=CartSlice.actions;

export default CartSlice.reducer;