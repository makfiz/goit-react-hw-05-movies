import { Suspense } from "react";

import Container from "components/Container/Container";
import {Outlet} from "react-router-dom";
import {Header} from "./SharedLayout.styled"
import { StyledNavLink } from "./SharedLayout.styled";
import navItems from "../utils/HeaderNavItems.json";


const SharedLayout  = () => {
    return (
        <Container>
            <Header>
                <nav>
                    {navItems.map(item => {
                        return <StyledNavLink to={item.href} key={item.href}>{item.text}</StyledNavLink>
                    })}
                </nav>
            </Header>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </Container>
 
    )
}

export default SharedLayout 