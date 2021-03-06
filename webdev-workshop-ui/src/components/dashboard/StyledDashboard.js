import styled from 'styled-components';

export const Box = styled.div`
  height: auto;
  width: auto;
  border: 1px solid black;
  margin-bottom: 75px;
  background-color: #f2f2f2;
  border-radius: 10px
`;

export const Title = styled.h1`
  padding: 10px 0px 0px 30px;
  font-family: sans-serif;
  font-size: 24px
`;

export const Subtitle = styled.h3`
  padding: 0px 0px 0px 40px;
  font-family: sans-serif;
`;

export const Text = styled.p`
  padding: 0px 0px 0px 40px;
  margin: 0px;
  margin-top: 10px;
  font-family: sans-serif;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  margin: 0px 0px 20px 40px;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 150px;
  padding: 0px 0px 0px 40px;
  margin: 0px -20px 20px 20px;
`;

export const StyledButton = styled.input`
  width: 250px;
  height: 30px;
  margin: 0px 0px 20px 40px;
  border-radius: 5px;
  background-color: white;
`;

export const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap
  margin: 0;
  border-bottom: 1px black solid;
`;
