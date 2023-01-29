import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;

  span {
    font-size: 16px;
  }
`;
