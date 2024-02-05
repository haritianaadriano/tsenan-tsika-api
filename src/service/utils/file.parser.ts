export const toBase64 = (file) => {
  return Buffer.from(file).toString('base64');
};
