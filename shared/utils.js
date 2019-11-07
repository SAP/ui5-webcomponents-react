function highlightLog(projectName) {
  const width = 100;
  console.log('');
  console.log('#'.repeat(width));
  let whitespacesPerSide = (width - 6 - projectName.length) / 2;
  whitespacesPerSide = Math.max(whitespacesPerSide, 1);
  console.log(
    `###${' '.repeat(Math.ceil(whitespacesPerSide))}${projectName}${' '.repeat(Math.floor(whitespacesPerSide))}###`
  );
  console.log('#'.repeat(width));
  console.log('');
}

module.exports = {
  highlightLog
};
