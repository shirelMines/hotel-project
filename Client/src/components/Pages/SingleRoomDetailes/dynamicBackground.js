import styled from 'styled-components';

const StyledBackground = styled.header`

 background: url(${props=>props.image}) center/cover no-repeat;
 min-height: 75vh;
 display: flex;
 align-items:center;
 justify-content:center;

`;

export default StyledBackground;