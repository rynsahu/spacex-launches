import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: ${({ width }) => width};
`;

export default Card;
