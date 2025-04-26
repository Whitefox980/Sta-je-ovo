// components/ThemeToggler.jsx
import styled from 'styled-components';

const DarkMode = styled.div`
  background: ${props => props.dark ? '#121212' : '#fff'};
  color: ${props => props.dark ? '#fff' : '#000'};
  min-height: 100vh;
`;
