import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllClinic = createAsyncThunk(
    "allClini",
    async (username) => {
      const response = await axios.get(`https://backapollo.herokuapp.com/clinic`);
      return response.data.data;
    }
  );
export const getsingleClinic = createAsyncThunk(
    "singleClini",
    async (id) => {
      const response = await axios.get(`https://backapollo.herokuapp.com/clinic/${id}`);
      return response.data.data;
    }
  );