
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if(matrix && matrix.length){
    let towelSorted = (matrix.map((item,index) => (index % 2 == 0) ? item : item.reverse())).join(",").split(",");
    array = towelSorted;
    return array;
  }
  else{
    return array;
  }
}
