import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button, BUTTON_CLASSES } from "../button";
import {
  ProductCardContainer,
  CardFooter,
  ProductCardImage,
  Name,
  Price,
} from "./product-card.styles";

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={name} />

      <CardFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CardFooter>

      <Button
        buttonType={BUTTON_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
