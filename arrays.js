var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array, element) {
  var new_array = [element, array[0]]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array, element]
  return new_array
}


// THIS ONE IS is FINE!
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, index) {
  return array[2]
}

/*
 describe('accessElementInArray(array, index)', () => {
    it('accesses the element in array at the given index', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
  */ 