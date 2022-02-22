import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
background: blue;

outline:none;
border:none;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;
display:flex;
align-items:center;
padding:16px 40px;
font-size:16px;
color: black;
&:hover {
    transform:translateY(-2px);
}
`;