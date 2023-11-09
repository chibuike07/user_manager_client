import React, { FC, ReactElement } from "react";
import { Container } from "./registerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/app/components/Common/Button/CustomButton";
import RegisterForm from "@/app/components/FormComponent/RegisterForm";
import LinkSugar from "@/app/components/UseClientSugarTexts/LinkSugar";

const Register: FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <header className="wp_header">
          <FontAwesomeIcon icon={faShapes} className="icon" />
          <h2>Sign up</h2>
          <p>
            <small>
              Enter your details below to create your account and get started
            </small>
          </p>
        </header>

        <RegisterForm identity={"Student"} />
        <section className="wp_submit">
          <CustomButton text="become a member" />
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
