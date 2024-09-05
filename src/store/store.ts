import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ElementsState {
  elements: string[];
}

const initialState: ElementsState = {
  elements: [],
};

const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<string>) => {
      state.elements.unshift(action.payload);
    },
    removeElement: (state) => {
      state.elements.pop();
    },
  },
});

export const { addElement, removeElement } = elementsSlice.actions;

const store = configureStore({
  reducer: {
    elements: elementsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
