import { Main, PageForm } from "./pageStyles";
import React from "react";
import SelectSugar from "./components/UseClientSugarTexts/SelectSugar";
import {
  faShapes,
  FontAwesomeIcon,
} from "./components/Common/IconsSugar/icons";
import { useSelector } from "react-redux";
import { ReduxProvider } from "@/Store/ReduxProvider";
const Home = () => {
  const row = useSelector((state) => console.log("state :>> ", state));
  console.log("row :>> ", row);
  return (
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
  );
};

export default Home;
