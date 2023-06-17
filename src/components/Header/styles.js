import styled, { css } from "styled-components";

const HeaderStyles = styled.div(
    ({ theme }) => css`
        background-color: ${theme.colors.gray};
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 93px;
    `,
);
const HeaderWrapper = styled.div(
    () => css`
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 100%;
        max-width: 1440px;
    `,
);
const HeaderNav = styled.ul(
    ({ theme }) => css`
        list-style: none;
        display: flex;
        color:  ${theme.colors.Interaction};
    `,
);

const HeaderButtonWrapper = styled.div(
    ({ theme }) => css`
        display: flex;
        width: 243px;
        align-items: center;
        justify-content: center;
    `,
);
const HeaderNavItem = styled.li(
    () => css`
        margin: 1rem;
    `,
);


export {
    HeaderStyles,
    HeaderWrapper,
    HeaderNav,
    HeaderNavItem,
    HeaderButtonWrapper
};
