import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  min-height: 45px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  border-radius:10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); 
`
export const StyledNavLink = styled(NavLink)`
    margin-right:15px;
    color:${p => p.theme.colors.black};
    text-decoration:none;
    font-size:${p => p.theme.fontSizes.l};
    padding: 0 3px;

    &.active {
        background-color:${p => p.theme.colors.navAccent};
        color:${p => p.theme.colors.white};
        border-radius:10px;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color:${p => p.theme.colors.navAccent};
    }
`