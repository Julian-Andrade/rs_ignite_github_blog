import styled, { css } from "styled-components";

interface ExternalLinkProps {
  variant?: "iconLeft";
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  height: 19px;
  line-height: 19px;
  font-size: ${({ theme }) => theme.textSizes["components-link"]};
  font-weight: 700;
  background: none;
  color: ${({ theme }) => theme.colors["brand-blue"]};
  border: none;
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.4s;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;
