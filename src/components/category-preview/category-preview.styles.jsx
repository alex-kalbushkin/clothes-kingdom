import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleLinkContainer = styled.div`
  margin-bottom: 25px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const PreviewProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
