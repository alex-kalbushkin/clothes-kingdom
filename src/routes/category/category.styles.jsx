import styled from "styled-components";

export const CategoryContainer = styled.div``;

export const CategoryTitleContainer = styled.div`
  margin-bottom: 25px;
`;

export const CategoryTitle = styled.span`
  font-size: 28px;
  text-transform: uppercase;
`;

export const CategoryProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
