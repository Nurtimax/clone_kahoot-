import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToggleSliceType } from "../../../types";

const initialState: IToggleSliceType = {
  data: {
    anchorEl: null,
  },
};



const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    toggleAnchorEl: (state, { payload }: PayloadAction<typeof Element>) => {
      if (state.data.anchorEl) {
        state.data.anchorEl = null;
        console.log(true);
        return;
      }
      if (!state.data.anchorEl) {
        console.log(false);
        console.log(payload);

        state.data.anchorEl = payload;
      }
    },
  },
});

export const toggleSliceAction = toggleSlice.actions;

export default toggleSlice;
