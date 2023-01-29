import styled from "styled-components";

export const ProductCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  button {
    display: none;
  }

  &:hover {
    ${ProductCardImage} {
      opacity: 0.7;
    }

    button {
      width: 80%;
      position: absolute;
      top: 255px;
      opacity: 0.85;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Name = styled.span`
  width: 90%;
`;

export const Price = styled.span`
  width: 10%;
`;
