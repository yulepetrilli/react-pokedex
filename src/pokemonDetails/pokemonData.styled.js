import styled from "styled-components";

export const TypeTag =  styled.span`
    background: ${props => props.bg}
`;

export const ProgressBar = styled.div`
    width: ${props => props.width}%;
    background: ${props => props.bg ? props.bg : "#6C3483"};
`;