import { SpinnerContainer } from "./styles";

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </SpinnerContainer>
  );
}
