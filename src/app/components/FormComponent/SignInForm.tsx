import React from "react";
import { Form } from "./formComponentStyle";
import CustomLabel from "../Common/Label/CustomLabel";
import CustomInput from "../Common/Input/CustomInput";
import { IFormComponent } from "./Interface";

const SignInForm = ({ identity }: IFormComponent) => {
  return (
    <Form>
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="name" text="Name" />
          <CustomInput
            type="text"
            otherProps={{ placeholder: "Enter name", id: "name" }}
          />
        </div>
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="surname" text="Surname" />
          <CustomInput
            type="text"
            otherProps={{ placeholder: "Enter Surname", id: "surname" }}
          />
        </div>
      </fieldset>
      {identity ? (
        <fieldset className="fm_group">
          <div className="fm_gp_wrapper">
            <CustomLabel htmlFor="code" text="Code" />
            <CustomInput
              type="text"
              otherProps={{
                placeholder: "Enter your unique code",
                id: "code",
              }}
            />
          </div>
        </fieldset>
      ) : null}{" "}
    </Form>
  );
};

export default SignInForm;
