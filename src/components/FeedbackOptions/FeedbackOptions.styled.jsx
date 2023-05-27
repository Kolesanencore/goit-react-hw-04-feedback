import styled from '@emotion/styled';

export const Button = styled.button`
  width: 120px;
  padding: 10px 5px;
  background-color: #442d2d;
  font-size: 24px;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 2px 8px rgba(255, 107, 1, 0),
      inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2),
      inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(255, 107, 1, 0.3);
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
