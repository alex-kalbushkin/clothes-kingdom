import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCounter = styled.span`
  position: absolute;
  top: 18px;
  font-weight: bold;
  font-size: 12px;
`;

// --- scss ---
// .cartIconContainer {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;

//   .shoppingIcon {
//     width: 24px;
//     height: 24px;
//   }

//   .itemCounter {
//     position: absolute;
//     top: 18px;
//     font-weight: bold;
//     font-size: 12px;
//   }
// }