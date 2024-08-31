import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching todos
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://dummyjson.com/todos');
    return response.json();
});

// Create a slice for the todo state
const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                console.log(state.data);
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.log("Error", action.error.message);
            });
    },
});

// Export the reducer
export default todoSlice.reducer;
