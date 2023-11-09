"use client";
import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const ReduxProvider = (WrapperComponent: FC) => {
  const withReduxProvider = ({ ...props }) => {
    return (
      <Provider store={store}>
        <WrapperComponent {...props} />
      </Provider>
    );
  };

  return withReduxProvider;
};
