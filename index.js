const toArray = (obj) => {

  if(Object.keys(obj).length === 0) {
    return [];
  }

  let objectArr = Object.entries(obj);

  return objectArr;
}

toArray({ a: 1, b: 2 });


/* toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ [] */