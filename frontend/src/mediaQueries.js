export const breakpoints = {
  pad: 500,
  destop: 1200,
};

export const media = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) {${style}}`;
};
