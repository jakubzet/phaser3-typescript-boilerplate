export const getWindowSize = (): {
  width: number;
  height: number;
} => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
