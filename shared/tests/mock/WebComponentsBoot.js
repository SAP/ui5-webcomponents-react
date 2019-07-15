module.exports = function() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};
