import styled, { css } from "styled-components";

const mainColor = "black";
const subColor_1 = "gray";
const subColor_2 = "white";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  font-size: 16px;
  color: ${subColor_1};
  position: absolute;
  top: 10px;
  left: 5px;
  transition: 300ms ease all;
  pointer-events: none;

  ${({ shrink }) => shrink && shrinkLabel}
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  color: ${subColor_1};
  background: none;
  background-color: ${subColor_2};
  padding: 10px 10px 10px 5px;
  margin: 25px 0;
  border: none;
  border-bottom: 1px solid ${subColor_1};
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 3px;
  }
`;

// --- scss ---
// $main-color: black;
// $sub-color_1: gray;
// $sub-color_2: white;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }

// .formInputContainer {
//   position: relative;
//   margin: 45px 0;

//   .formInput {
//     width: 100%;
//     display: block;
//     color: $sub-color_1;
//     background: none;
//     background-color: $sub-color_2;
//     padding: 10px 10px 10px 5px;
//     margin: 25px 0;
//     border: none;
//     border-bottom: 1px solid $sub-color_1;
//     font-size: 18px;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .formInputLabel {
//       @include shrinkLabel();
//     }
//   }

//   input[type="password"] {
//     letter-spacing: 3px;
//   }

//   .formInputLabel {
//     font-size: 16px;
//     color: $sub-color_1;
//     position: absolute;
//     top: 10px;
//     left: 5px;
//     transition: 300ms ease all;
//     pointer-events: none;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }