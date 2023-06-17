import React from "react";
import Image from "next/image";
import Anchor from "../atoms/Anchor/index";
import { HeaderStyles } from "./styles";

const Header = () => {
    return (
        <HeaderStyles id="Header" as="header">
            <Anchor>
            <Image
                src="/logo.png"
                width={192}
                height={61}
                alt="Picture of the author"
                />
            </Anchor>
        </HeaderStyles>
    );
};

export default Header;
