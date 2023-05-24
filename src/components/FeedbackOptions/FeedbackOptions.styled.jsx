import styled from '@emotion/styled';

export const Button = styled.button`
  width: 120px;
  padding: 10px 5px;
  background-color: #442d2d;
  font-size: 24px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #442d2d;
    background-color: #442d2d16;
  }
`;

export const Card = styled.div`
  background-color: #3c303025;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
