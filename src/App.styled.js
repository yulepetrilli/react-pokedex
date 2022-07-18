import styled from "styled-components";
import img from './pattern.png';

export const Wrapper = styled.div`
    padding-top: 4rem;
    min-height: 100vh;
`;

export const Background = styled.div`
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    background-color: #fafafa;
    background: url(${img});
`;