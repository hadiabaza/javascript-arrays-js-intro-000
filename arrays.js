var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  let newArr = [element, ...array]
  return newArr;
};

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element){
  return [array,...element];
};

function destructivelyAddElementToEndOfArray(array, element){
  return [array, ...element];
}
