
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




interface User {
  username: string;
  email?: string;
  password: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const signUpUser = createAsyncThunk<{user: User; token: string}, User,{ rejectValue: string }>(
  'auth/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post<{user: User; token: string}>('http://localhost:5000/signup', userData);
      return response.data
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk<{user: User; token: string}, User, { rejectValue: string }>(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post<{user: User; token: string}>('http://localhost:5000/signin', userData);
      return response.data;
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
