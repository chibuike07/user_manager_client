import React from "react";
import CustomLabel from "../Common/Label/CustomLabel";
import CustomInput from "../Common/Input/CustomInput";
import CustomSelect from "../Common/Select/CustomSelect";
import { Form } from "./formComponentStyle";
import { useSelector } from "react-redux";
import { ReduxProvider } from "@/Store/ReduxProvider";

const RegisterForm = () => {
  const selectedUser = useSelector((state: any) => state);

  return (
    <Form>
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="name" text="Name" />
          <CustomInput type="text" placeholder="Enter name" id="name" />
        </div>
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="surname" text="Surname" />
          <CustomInput type="text" placeholder="Enter surname" id="surname" />
        </div>
      </fieldset>
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="dob" text="Date of Birth" />
          <CustomInput type="date" placeholder="Enter date" id="dob" />
        </div>
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="nin" text="National Identity Number" />
          <CustomInput type="number" placeholder="Enter nin" />
        </div>
      </fieldset>
      <fieldset className="fm_group">
        <div className="fm_gp_wrapper">
          <CustomLabel htmlFor="number" text="Number" />
          <CustomInput type="text" placeholder="Enter number" id="number" />
        </div>
        {selectedUser === "Student" ? (
          <div className="fm_gp_wrapper">
            <CustomLabel htmlFor="title" text="Title" />
            <CustomSelect
              options={["Mr", "Mrs", "Miss", "Prof", "Dr"]}
              otherprops={{ placeholder: "Enter Title", id: "title" }}
            />
          </div>
        ) : null}{" "}
      </fieldset>
      {selectedUser === "Student" ? (
        <fieldset className="fm_group">
          <div className="fm_gp_wrapper">
            <CustomLabel htmlFor="salary" text="Salary" />
            <CustomInput type="text" placeholder="Enter salary" />
          </div>
        </fieldset>
      ) : null}
    </Form>
  );
};

export default ReduxProvider(RegisterForm);
