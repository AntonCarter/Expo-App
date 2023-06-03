import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, forgot, signOutUser } from '../services/authService'

const initalState = { user: {} };

const authSlice = createSlice({
    name: 'auth',
    initialState: initalState,
    reducers: {
        updateEmail(state, action) {
            console.info('action recieved', state, action);
            return { user: { username: action.payload } };
        },
        updateUser(state, action) {
            console.info('action recieved', state, action);
            return { user: action.payload };
        },
        logoutUser(state, action) {
            console.info('action recieved', state, action);
            return initalState;
        },
        clearError(state, action) {
            console.info('action recieved', state, action);
            return { ...state, errorText: "" };
        }

    },
    extraReducers: builder => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                console.info('login pending...')
                return { ...state, errorText: "", status: "loading" };;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                console.info('login fulfilled...', action.payload.profile);

                return {
                    ...state,
                    status: "complete",
                    user: {
                        username: action.payload._tokenResponse.email,
                        token: action.payload._tokenResponse,
                        profile: action.payload.profile
                    }
                };


            })
            .addCase(loginAsync.rejected, (state, action) => {
                return { ...state, errorText: action.error.message, status: "error", };
            })
            .addCase(signoutAsync.pending, (state, action) => {
                console.info('pending signout')
                return state;
            })
            .addCase(signoutAsync.rejected, (state, action) => {
                console.info('rejected signout', action)
                return state;
            })
            .addCase(signoutAsync.fulfilled, (state, action) => {
                console.info('fulfilled signout')
                return initalState;
            })
            .addCase(forgotPasswordAsync.pending, (state, action) => {
                return { ...state, errorText: "", status: "loading" };
            })
            .addCase(forgotPasswordAsync.fulfilled, (state, action) => {
                return {...initalState, status: "complete"};
            })
            .addCase(forgotPasswordAsync.rejected, (state, action) => {
                console.info('forgot password rejected ', action)
                return { ...state, errorText: action.error.message, status: "complete" };
            })
    }
})
export const selectUser = (state) => {
    return state.auth.user;
}

export const selectStatus = (state) => {
    return state.auth.status
}

export const errorSelector = (state) => {
    return state.auth.errorText;
}

export const loginAsync = createAsyncThunk('auth/login', async (params) => {

    const user = await login(params.email, params.password);
    params.navigate();
    return user;

});

export const signoutAsync = createAsyncThunk('auth/signout', async (params) => {
    console.info('signoutAsync', params)
    await signOutUser();
    params.navigate();
});

export const forgotPasswordAsync = createAsyncThunk('auth/forgot', async (params) => {
    const user = await forgot(params.email);
    params.navigate();
    return user;
});

export const { updateEmail, logoutUser, clearError } = authSlice.actions
export default authSlice.reducer