import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, TitleEnum } from "./Interface";
const initialState: IInitialState = {
  users: [
    {
      name: "",
      surname: "",
      nin: 0,
      dob: "",
      salary: 0,
      title: TitleEnum.Mr,
      number: "",
    },
  ],
  selectedUser: "",
  loginInfo: {
    name: "",
    surname: "",
    code: undefined,
  },
};

const RegistrationViewSlice = createSlice({
  name: "register-view",
  initialState: initialState,
  reducers: {
    setIdentity: (state, action: PayloadAction<"Student" | "Teacher">) => {
      const { payload } = action;
      return { ...state, selectedUser: payload };
    },

    signUp: (state, actions: PayloadAction<[]>) => {
      const { payload } = actions;
      return { ...state, users: payload };
    },

    login: (
      state,
      action: PayloadAction<{ name: string; surname: string; code?: string }>
    ) => {
      const { payload } = action;
      return {
        ...state,
        loginInfo: payload,
      };
    },
  },
});

export const { login, signUp, setIdentity } = RegistrationViewSlice.actions;

export default RegistrationViewSlice.reducer;
