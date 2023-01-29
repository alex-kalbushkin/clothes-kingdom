import ProductCard from "../product-card";
import {
  CategoryPreviewContainer,
  PreviewProducts,
  Title,
  TitleLinkContainer,
} from "./category-preview.styles";

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <TitleLinkContainer>
        <Title to={title}>{title}</Title>
      </TitleLinkContainer>

      <PreviewProducts>
        {products
          .filter((p, productIndex) => productIndex < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewProducts>
    </CategoryPreviewContainer>
  );
}
