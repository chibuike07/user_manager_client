"use client";
import styled from "styled-components";

export const Main = styled.main`
  background-color: red;
  min-height: 100vh;
  background-color: var(--secondary_color);
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wp_header {
      text-align: center;
      margin-bottom: 1rem;
      .icon {
        margin-bottom: 1rem;
        color: var(--primary_color);
      }

      h2 {
        font-size: 2rem;
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }
`;
export const PageForm = styled.form`
  width: 70%;
  min-width: 300px;
  display: flex;
  justify-content: center;

  select {
    width: 60%;
    height: 3em;
    border: none;
    outline: none;
    padding: 0.5rem;
    box-shadow: inset 0px 0px 10px var(--primary_color);
    @media only screen and (max-width: 855px) {
      flex: 1;
    }
  }
`;
