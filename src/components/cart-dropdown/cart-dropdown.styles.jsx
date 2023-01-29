import styled from "styled-components";
import {
  BasicButton,
  InvertedButton,
  GoogleSignInButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 12px;
  z-index: 5;

  ${BasicButton},
  ${InvertedButton},
  ${GoogleSignInButton} {
    margin-top: 10px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  // Firefox scrollbar setup
  scrollbar-width: thin;
  scrollbar-color: rgb(77, 77, 77);

  // other browsers scrollbar
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(163, 163, 163);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(77, 77, 77);
    border-radius: 6px;
  }
`;

export const EmptyCartMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;
