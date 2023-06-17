import React from "react";
import Link from "next/link";
import Icons from "../atoms/Icons/Icons";
import { FooterStyles, FooterWrapper, FooterNav, FooterNavItem, FooterButtonWrapper } from "./styles";

const Footer = () => {
    return (
        <FooterStyles id="Footer" as="footer">
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem><Link href="/">News</Link></FooterNavItem>
                    <FooterNavItem><Link href="/products">Products</Link></FooterNavItem>
                    <FooterNavItem><Link href="#">Contact</Link></FooterNavItem>
                    <FooterNavItem><Link href="#">Help</Link></FooterNavItem>
                </FooterNav>
                <FooterButtonWrapper>   
                    <Link href="https://www.facebook.com/DanoneMX/?locale=es_LA" color="#324BAA" size={20}><Icons name="Facebook"/></Link>
                    <Link href="https://www.instagram.com/danonemx/?hl=es-la" color="#324BAA" size={20}><Icons name="Instagram"/></Link>
                    <Link href="https://twitter.com/DanoneMX" color="#324BAA" size={20}><Icons name="Twitter"/></Link>
                </FooterButtonWrapper>
            </FooterWrapper>
        </FooterStyles>
    );
};

export default Footer;
