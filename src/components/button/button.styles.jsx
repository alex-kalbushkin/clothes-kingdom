import styled from "styled-components";

const mainBlackColor = "black";
const mainWhiteColor = "white";

export const BasicButton = styled.button`
  width: auto;
  min-width: 165px;
  height: 50px;
  line-height: 50px;
  color: ${mainWhiteColor};
  background-color: ${mainBlackColor};
  letter-spacing: 1px;
  padding: 5px 15px;
  text-transform: uppercase;
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    color: ${mainBlackColor};
    background-color: ${mainWhiteColor};
    border: 1px solid ${mainBlackColor};
  }
`;

export const GoogleSignInButton = styled(BasicButton)`
  background-color: #4285f4;
  color: ${mainWhiteColor};

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BasicButton)`
  color: ${mainBlackColor};
  background-color: ${mainWhiteColor};
  border: 1px solid ${mainBlackColor};

  &:hover {
    color: ${mainWhiteColor};
    background-color: ${mainBlackColor};
    border: none;
  }
`;

// --- scss styles ---
// $main-black-color: black;
// $main-white-color: white;

// .button {
//   width: auto;
//   min-width: 165px;
//   height: 50px;
//   line-height: 50px;
//   color: $main-white-color;
//   background-color: $main-black-color;
//   letter-spacing: 1px;
//   padding: 5px 15px;
//   text-transform: uppercase;
//   font-size: 14px;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 300ms ease;

//   &:hover {
//     color: $main-black-color;
//     background-color: $main-white-color;
//     border: 1px solid $main-black-color;
//   }

//   &.googleSignInButton {
//     background-color: #4285f4;
//     color: $main-white-color;

//     &:hover {
//       background-color: #357ae8;
//       border: none;
//     }
//   }

//   &.invertedButton {
//     color: $main-black-color;
//     background-color: $main-white-color;
//     border: 1px solid $main-black-color;

//     &:hover {
//       color: $main-white-color;
//       background-color: $main-black-color;
//       border: none;
//     }
//   }
// }
