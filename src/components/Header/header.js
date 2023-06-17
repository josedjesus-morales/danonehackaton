import React from "react";
import Image from "next/image";
import Link from "next/link";
import Anchor from "../atoms/Anchor/index";
import { HeaderStyles, HeaderWrapper, HeaderNav, HeaderNavItem } from "./styles";

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
                    <HeaderNavItem><Link href="/">Home</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="/products">Products</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="#">Diary</Link></HeaderNavItem>
                    <HeaderNavItem><Link href="#">Contact</Link></HeaderNavItem>
                </HeaderNav>
                
            </HeaderWrapper>
        </HeaderStyles>
    );
};

export default Header;
