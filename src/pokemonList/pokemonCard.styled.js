import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Img = styled.img`
    height: 50px;
`;

export const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

export const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover{
        box-shadow: 0 14px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    };

    -moz-user-select: none;
    -webside-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

export const Loader = styled.img`
    width: 5em;
    height: 5em;
`;


export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &: hover {
        color: black;
    }
`;