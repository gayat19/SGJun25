
import { createSlice } from "@reduxjs/toolkit";


var employeeSlice = createSlice({
    name:'employee',
    initialState:[{id:101,name:'Ramu'}],
    reducers:{
        addemployee:(state:any,data:any)=>{
            state = state.push(data.payload)
        },
        deleteemployee:(state:any,data:any)=>{
            for(let i=0;i<state.length;i++)
            {
                if(state[i].id==data.payload)
                    state = state.splice(i,1);
            }
        }
    }
})

export default employeeSlice.reducer;

export const {addemployee,deleteemployee} = employeeSlice.actions;