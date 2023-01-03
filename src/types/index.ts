import { ReactNode } from "react";

export interface ICartItemImage {
  imageForCard: string;
}
export interface ITargetCardItemData {
  id: number;
  category: string;
  title: string;
  description: string;
  buttonTitle: string;
  image: string;
}

export interface ICreateTest {
  data?: ICreateTestDataItem;
}

export interface ICreateTestDataItem {
  items?: ICreateTestItem[];
  chooseOption: IExampleDataType;
}

export interface ICreateTestItem {
  id: string;
  completed: boolean;
  isCorrect: string;
  question?: ICreateTestItemQuestion[];
  cardTitle: string;
  dateNow: string;
  chooseOption: IExampleDataType[];
}

export interface ICreateTestItemQuestion {
  questionName: string;
  id: string;
  options: ICreateTestItemQuestionOption[];
}

export interface ICreateTestItemQuestionOption {
  id: string;
  optionTitle: string;
}

// ///______________
export interface ICreateTestActionType {
  id: number;
  icon: ReactNode;
  name: string;
}

export interface IGetQuestionValueType {
  id: string;
  newQuestion: ICreateTestItemQuestion;
}

export interface ITabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}

export interface IAddSettingQuestionType {
  id: string;
  findedData: ICreateTestItem;
}

export interface IExampleDataType {
  id: number;
  title: string;
  img: string;
  work: boolean;
  options: IExampleDataOptionType[];
  description: string;
}

export interface IExampleDataOptionType {
  id: number;
  bg: string;
  title: string;
}

export interface IAddQuestionItemPayloadType {
  id: string;
  newQuestionItem: IExampleDataType;
}

// //

export interface IToggleSliceType {
  data: IToggleSliceDataType;
}

export interface IToggleSliceDataType {
  anchorEl: null | typeof Element;
}


