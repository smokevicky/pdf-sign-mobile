import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FileState {
  file: File | null;
}

const initialState: FileState = {
  file: null,
};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFile(state, action: PayloadAction<File | null>) {
      state.file = action.payload;
    },
    clearFile(state) {
      state.file = null;
    },
  },
});

export const { setFile, clearFile } = fileSlice.actions;
export default fileSlice.reducer;
