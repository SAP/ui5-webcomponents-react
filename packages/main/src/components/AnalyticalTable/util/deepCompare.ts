export function deepCompare(obj1, obj2) {
  //Loop through properties in object 1
  if ((!obj1 && obj2) || (obj1 && !obj2)) {
    return false;
  }
  for (let p in obj1) {
    //Check property exists on both objects
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

    switch (typeof obj1[p]) {
      //Deep compare objects
      case 'object':
        if (!deepCompare(obj1[p], obj2[p])) return false;
        break;
      //Compare function code
      case 'function':
        if (typeof obj2[p] == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
        break;
      //Compare values
      default:
        if (obj1[p] != obj2[p]) return false;
    }
  }

  //Check object 2 for any extra properties
  for (let p in obj2) {
    if (typeof obj2[p] !== 'undefined' && typeof obj1[p] === 'undefined') {
      return false;
    }
    // if (typeof (obj1[p]) == 'undefined') return false;
  }
  return true;
}
