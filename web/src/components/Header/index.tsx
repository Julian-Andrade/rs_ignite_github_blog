import { HeaderContainer } from "./styles";
import headerLogo from "../../assets/header_logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="" />
    </HeaderContainer>
  )
}