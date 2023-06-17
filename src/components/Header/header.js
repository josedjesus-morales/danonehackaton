import React from "react";
import Image from "next/image";
import Link from "next/link";
import Anchor from "../atoms/Anchor/index";
import Button from "../atoms/Button/index"
import { HeaderStyles, HeaderWrapper, HeaderNav, HeaderNavItem, HeaderButtonWrapper } from "./styles";

const Header = () => {
    return (
        <HeaderStyles id="Header" as="header">
            <HeaderWrapper>
                <Anchor href="/">
                <Image
                    src="/logo.png"
                    width={192}
                    height={61}
                    alt="Logo"
                    />
                </Anchor>
                <HeaderNav>
                    <HeaderNavItem><Link href="/home">Home</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="/products">Products</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="/users">Diary</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="#">Contact</Link></HeaderNavItem>
                </HeaderNav>
                <HeaderButtonWrapper>   
                    <Button variant="Outline">Login</Button>
                    <Button variant="Outline">Sign up</Button>
                </HeaderButtonWrapper>
            </HeaderWrapper>
        </HeaderStyles>
    );
};

export default Header;
