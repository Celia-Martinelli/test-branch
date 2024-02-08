import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // Pour l'instant c'est vide, on va le remplir dans la suite du cours
});

// J'exporte les reducers de la slice
export default userSlice.reducer;
