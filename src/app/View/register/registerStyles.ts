"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: var(--full_width);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 90%;
    min-height: 80vh;

    .wp_header {
      padding: 1rem;
      .icon {
        color: var(--primary_color);
        width: 2rem;
        margin-bottom: 0.8rem;
      }

      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: large;
      }
    }
  }
`;
