export const getImageUrl = (path) => {
  console.log('Path received:', path);
  const url = `/assets/${path}`;
  console.log('Final URL:', url);
  return url;
};
