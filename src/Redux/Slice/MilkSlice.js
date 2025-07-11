import {createSlice} from "@reduxjs/toolkit"
const milkslice=createSlice({
    name:"milk",
    initialState:{
        milvalue:0,
        milkprice:0,
    },
    reducers:{
        incrementMilk:(state,action)=>{
            state.milvalue+=action.payload;
            state.milkprice+=action.payload*10;
        },
        decrementMilk:(state,action)=>{
            state.milvalue-=action.payload;
            state.milkprice-=action.payload*10;
        },
        incrementMilkByAmount:(state,action)=>{
            state.milvalue+=action.payload;
            state.milkprice+=action.payload*10;
        },
        decrementMilkByAmount:(state,action)=>{
            state.milvalue-=action.payload;
            state.milkprice-=action.payload*10;
        }
    }
})
export default milkslice.reducer;
export const {incrementMilk,decrementMilk,incrementMilkByAmount,decrementMilkByAmount}=milkslice.actions;