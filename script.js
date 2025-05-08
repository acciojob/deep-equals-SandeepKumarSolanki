function deepEquals(a, b) {
  // Check if both values are strictly equal (covers primitive values like numbers, strings, etc.)
  if (a === b) {
    return true;
  }

  // Handle the special case of NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  // If one of them is null or undefined, but not both, they are not equal
  if (a === null || b === null || a === undefined || b === undefined) {
    return false;
  }

  // If one is an array and the other is not, they're not equal
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  // If both are arrays, compare their lengths and recursively check each element
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  // If both are objects, check their keys and values
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // If they don't have the same number of keys, they're not equal
    if (keysA.length !== keysB.length) {
      return false;
    }

    // Recursively check all key-value pairs
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  // If none of the conditions match, they are not equal
  return false;
}

module.exports = deepEquals;
