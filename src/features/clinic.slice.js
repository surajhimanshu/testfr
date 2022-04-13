
import { createSlice } from "@reduxjs/toolkit";
import { getAllClinic, getsingleClinic } from "./clinic.api";

const initialState = {
  singleClinic: {},
  allClinic: [],
  isError: false,
};

const clinicSlice = createSlice({
  name: "CLINIC",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllClinic.fulfilled, (state, action) => {
        state.isError = false;
        state.allClinic = action.payload;
      })
      .addCase(getAllClinic.rejected, (state, action) => {
            state.allClinic = [];
            state.isError = true;
         })
      .addCase(getsingleClinic.fulfilled, (state, action) => {
        state.isError = false;
        state.singleClinic = action.payload;
      })
      .addCase(getsingleClinic.rejected, (state, action) => {
        state.singleClinic = [];
        state.isError = true;
      })
  },
});


export default clinicSlice.reducer;