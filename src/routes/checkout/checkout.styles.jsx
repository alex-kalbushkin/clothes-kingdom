import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(182, 182, 182, 0.8);
`;

export const HeaderBlock = styled.span`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTotal = styled.div`
  text-transform: capitalize;
  margin-top: 20px;
  font-size: 36px;
  margin-left: auto;
`;
