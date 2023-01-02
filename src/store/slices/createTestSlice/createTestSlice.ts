import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICreateTest,
  ICreateTestItem,
  IExampleDataType,
  IGetQuestionValueType,
} from "../../../types";

const initialState: ICreateTest = {
  data: {
    items: [],
    chooseOption: {
      id: 1,
      title: "Quez",
      img: "https://assets-cdn.kahoot.it/builder/v2/assets/Question_type--Question.9a480bf0.svg",
      work: false,
      options: [
        { id: 1, bg: "#e21a3b", title: "task 1" },
        { id: 2, bg: "#1749a4", title: "task 2" },
        { id: 3, bg: "#d79d02", title: "task 3" },
        { id: 4, bg: "#27880d", title: "task 4" },
      ],
      description: "",
    },
  },
};

const createTestSlice = createSlice({
  name: "createTest",
  initialState,
  reducers: {
    getStateValue: (state, { payload }: PayloadAction<ICreateTestItem>) => {
      if (Array.isArray(payload)) {
        if (state.data?.items?.length === 0) {
          state.data.items.push(...payload);
          return;
        }
        if (state.data?.items?.length) {
          state.data.items = payload;
        }
        // state.data?.items?.push(...payload)
      } else {
        state.data?.items?.push(payload);
        console.log("not array");
      }
    },
    getQuestionValue: (
      state,
      { payload }: PayloadAction<IGetQuestionValueType>
    ) => {
      state.data?.items?.map((item) => {
        if (item.id === payload.id) {
          item.question?.push(payload.newQuestion);
          console.log(false);
        }
        return item;
      });
    },
    changeChooseOption: (
      state,
      { payload }: PayloadAction<IExampleDataType>
    ) => {
      state.data!.chooseOption = payload;
    },
  },
});

export const createTestAction = createTestSlice.actions;
export default createTestSlice;
