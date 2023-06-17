import styled, { css } from "styled-components";

const FooterStyles = styled.div(
    ({ theme }) => css`
        background-color: ${theme.colors.grayfooter};
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 64px;
    `,
);
const FooterWrapper = styled.div(
    () => css`
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
        max-width: 1440px;
    `,
);
const FooterNav = styled.ul(
    ({ theme }) => css`
        list-style: none;
        display: flex;
        color:  ${theme.colors.Interaction};
    `,
);

const FooterButtonWrapper = styled.div(
    ({ theme }) => css`
        display: flex;
        width: 150px;
        align-items: center;
        justify-content: space-between;
    `,
);
const FooterNavItem = styled.li(
    () => css`
        margin: 1rem;
        text-transform: uppercase;
    `,
);


export {
    FooterStyles,
    FooterWrapper,
    FooterNav,
    FooterNavItem,
    FooterButtonWrapper
};
