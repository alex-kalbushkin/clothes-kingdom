import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  border-bottom: 1px solid rgba(182, 182, 182, 0.8);
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  display: flex;
  align-items: center;
  width: 23%;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  width: 8%;
  display: flex;
  justify-content: center;
`;
