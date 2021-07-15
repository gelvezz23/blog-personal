import styled from "styled-components";
import { Link } from "gatsby";

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line arrow-parens
// eslint-disable-next-line react/react-in-jsx-scope

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    background-color: ${(props) => (props.color ? props.color : `white`)};
    padding: 10px;
    color: black;
    border-radius: 25px;
    margin: 5px;
`;

export const SiteMastLeft = styled.div`
    display: flex;
`;
