
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../authService';



interface User {
  username: string;
  email?: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean
  message: any
}

const user = JSON.parse(localStorage.getItem('user') as string)

export const signUpUser = createAsyncThunk<{user : User},User, { rejectValue: string }>(
  'auth/signUpUser',
  async (user, { rejectWithValue }) => {
    try {
      return await authService.register(user)
    } catch (error : any) {
      const message =  error.response.data.error || error.response.data.message
       
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk<{user: User}, User, { rejectValue: string }>(
  'auth/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      return await authService.login(user)
    } catch (error : any) {
      const message = error.response.data.error || error.response.data.message
      return rejectWithValue(message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async () => {
     authService.logout()
  }
);

const initialState: AuthState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess : false,
  message : ""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload.user
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload.user
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
      })
      
  },
});


export const { reset } = authSlice.actions
export default authSlice.reducer;
