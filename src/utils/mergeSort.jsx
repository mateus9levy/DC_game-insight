// Função para realizar a ordenação Merge Sort
function mergeSort(arr, key) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left, key), mergeSort(right, key), key);
  }
  
  // Função auxiliar para mesclar dois arrays ordenados
  function merge(left, right, key) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex][key] < right[rightIndex][key]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Adiciona os elementos restantes do array esquerdo
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  
    // Adiciona os elementos restantes do array direito
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
  }

  export default mergeSort