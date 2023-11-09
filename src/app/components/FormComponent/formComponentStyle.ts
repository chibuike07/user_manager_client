"use client";

import styled from "styled-components";

export const Form = styled.form`
  background-color: red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .fm_group {
    border: none;
    display: flex;
    flex: 1;
    gap: 1rem;
    background-color: orange;
    &:last-child .fm_gp_wrapper {
      flex: 1;
    }

    .fm_gp_wrapper {
      display: flex;
      flex-direction: column;
      flex: 0.5;
      label {
        font-size: 1.3rem;
      }
      input {
        height: 2.7em;
        border: none;
        outline: none;
        box-shadow: 0px 0px 5px gray;
        border-radius: 5px;
        padding: 0.8rem;
        flex: 2;
      }
    }
  }
`;
