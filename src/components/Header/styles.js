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


export {
    HeaderStyles,
    
};
