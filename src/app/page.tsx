"use client";
import { Main, PageForm } from "./pageStyles";
import React from "react";
import SelectSugar from "./components/UseClientSugarTexts/SelectSugar";
import {
  faShapes,
  FontAwesomeIcon,
} from "./components/Common/IconsSugar/icons";
import { ReduxProvider } from "../Store/ReduxProvider";

const Home = () => {
  return (
    <ReduxProvider>
      <Main>
        <div className="wrapper">
          <header className="wp_header">
            <FontAwesomeIcon icon={faShapes} className="icon" size="5x" />
            <h2>Welcome to the onboarding,</h2>
            <p>kindly identify yourself from the options</p>
          </header>
          <PageForm>
            <SelectSugar />
          </PageForm>
        </div>
      </Main>
    </ReduxProvider>
  );
};

export default Home;
