import React from "react";
import CustomLabel from "../Common/Label/CustomLabel";
import CustomInput from "../Common/Input/CustomInput";
import CustomSelect from "../Common/Select/CustomSelect";
import { Form } from "./formComponentStyle";
import { IFormComponent } from "./Interface";

const RegisterForm = ({ identity }: IFormComponent) => {
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
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="dob" text="Date of Birth" />
          <CustomInput
            type="date"
            otherProps={{ placeholder: "Enter DOB", id: "dob" }}
          />
        </div>
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="nin" text="National Identity Number" />
          <CustomInput
            type="number"
            otherProps={{
              placeholder: "Enter NIN",
              id: "nin",
              inputMode: "numeric",
            }}
          />
        </div>
      </fieldset>
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="number" text="Number" />
          <CustomInput
            type="text"
            otherProps={{ placeholder: "Enter Number", id: "number" }}
          />
        </div>
        {identity === "Student" ? (
          <div className="fm_gp_wrapper">
            <CustomLabel htmlFor="title" text="Title" />
            <CustomSelect
              options={["Mr", "Mrs", "Miss", "Prof", "Dr"]}
              otherProps={{ placeholder: "Enter Title", id: "title" }}
            />
          </div>
        ) : null}{" "}
      </fieldset>
      {identity === "Student" ? (
        <fieldset className="fm_group">
          <div className="fm_gp_wrapper">
            <CustomLabel htmlFor="salary" text="Salary" />
            <CustomInput
              type="text"
              otherProps={{ placeholder: "Enter Salary", id: "salary" }}
            />
          </div>
        </fieldset>
      ) : null}
    </Form>
  );
};

export default RegisterForm;
