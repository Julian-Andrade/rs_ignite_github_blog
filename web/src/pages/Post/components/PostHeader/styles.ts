import styled from "styled-components";

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  padding: 2rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rbga(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      line-height: 0px;
      color: ${({ theme }) => theme.colors["base-span"]};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`;
