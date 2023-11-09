import React, { FC, ReactElement } from "react";
import { Container } from "./registerStyles";
import CustomButton from "@/app/components/Common/Button/CustomButton";
import RegisterForm from "@/app/components/FormComponent/RegisterForm";
import LinkSugar from "@/app/components/UseClientSugarTexts/LinkSugar";
import {
  FontAwesomeIcon,
  faShapes,
} from "@/app/components/Common/IconsSugar/icons";
import { Provider } from "react-redux";
import { store } from "@/Store/store";

const Register: FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <header className="wp_header">
          <FontAwesomeIcon icon={faShapes} className="icon" size="3x" />
          <h2>Sign up</h2>
          <p>
            <small>
              Enter your details below to create your account and get started
            </small>
          </p>
        </header>

        <RegisterForm />
        <section className="wp_submit">
          <CustomButton>become a member</CustomButton>
        </section>

        <section className="wp_login">
          <p>
            Already have an account? <LinkSugar text="Sign In" />
          </p>
        </section>
      </div>
    </Container>
  );
};

export default Register;
