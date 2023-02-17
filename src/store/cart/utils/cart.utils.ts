export const addOrRemoveCartItem = (cartItems, product, isAddItem) => {
  const currentCartItems = [...cartItems];
  const itemIndex = currentCartItems.findIndex((i) => i.id === product.id);

  const currentItem = itemIndex !== -1 ? currentCartItems[itemIndex] : null;

  if (isAddItem) {
    currentItem
      ? (currentItem.quantity += 1)
      : currentCartItems.push({ ...product, quantity: 1 });
  } else {
    currentItem.quantity === 1
      ? currentCartItems.splice(itemIndex, 1)
      : (currentItem.quantity -= 1);
  }

  return currentCartItems;
};

export const deleteCartItem = (cartItems, cartItem) => {
  const currentCartItems = [...cartItems];

  const itemForDeleteIndex = currentCartItems.findIndex(
    (item) => item.id === cartItem.id
  );

  if (itemForDeleteIndex !== -1) {
    currentCartItems.splice(itemForDeleteIndex, 1);
  }

  return currentCartItems;
};

export const updateCartItems = (newCartItems) => {
  const cartTotalCount = newCartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );
  const cartTotalPrice = newCartItems.reduce(
    (total, currentItem) => (total += currentItem.price * currentItem.quantity),
    0
  );

  return {
    cartItems: newCartItems,
    cartTotalCount,
    cartTotalPrice,
  };
};
