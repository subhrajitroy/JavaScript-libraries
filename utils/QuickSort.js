function QuickSort(dataset,comparator){
	sort(dataset, 0, dataset.length-1, comparator);
	
	function sort(array, left, right,comparator){
	if(right > left){
	   var pivotIndex = Math.floor(( left + right )/2);
	   var pivotNewIndex = partition(array,left,right,pivotIndex,comparator);
	   sort(array, left, pivotNewIndex - 1,comparator);
	   sort(array, pivotNewIndex + 1, right,comparator);
	  
	}
   }
   
   function partition(array,left,right,pivotIndex,comparator){
	var pivot = array[pivotIndex];
	swap(array,pivotIndex,right);
	var storeIndex = left;
	for( var i= left ; i < right ; i++){
		if(comparator(array[i] , pivot)){
		   swap(array,i,storeIndex);
		   storeIndex = storeIndex + 1;
		}
	}
	swap(array,storeIndex,right);
	
	return storeIndex;
   }
   
   function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}
}






