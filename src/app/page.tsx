import Register from "./View/register/page";
import CustomInput from "./components/Common/Input/CustomInput";
import CustomLabel from "./components/Common/Label/CustomLabel";
import { PageForm } from "./pageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "./components/Common/Select/CustomSelect";
import React from "react";
import { setIdentity } from "../Store/registerReducer";
export default function Home() {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setIdentity(e.target);
  };
  return (
    <main>
      <div className="wrapper">
        <PageForm>
          <header className="wp_header">
            <FontAwesomeIcon icon={faShapes} className="icon" />
            <h2>Welcome to the onboarding,</h2>
            <p>kindly identify yourself from the options</p>
          </header>
          <form>
            <CustomSelect
              options={["Student", "Teacher"]}
              otherProps={{ onChange: (e) => handleChange(e) }}
            />
          </form>
        </PageForm>
      </div>
    </main>
  );
}
