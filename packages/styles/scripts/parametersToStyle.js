const fs = require('fs');
const colors = require('../Fiori3Colors');

let colorString = '';

colors.forEach((color) => {
  colorString += `/** ${color.description} */
export const ${color.name} = "${color.color}";\n`;
});

fs.writeFileSync('out.js', colorString);
