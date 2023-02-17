import styled from "styled-components";

export const PostContentContainer = styled.section`
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1,
  h2,
  h3 {
    text-align: justify;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  p {
    margin-top: 0.5rem;
    text-align: justify;
  }

  ul {
    list-style: inherit;
    padding-left: 1rem;
  }

  img {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
    border-radius: 8px;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
