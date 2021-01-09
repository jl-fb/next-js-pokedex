const paddedIndexImage = (index) => {
  const paddedIndex = `00${index}`.slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
  return image;
};
export default paddedIndexImage;
