var myArray = [1, 4, 3];
function arrayAdding (myArray){
	var firstValue = myArray[0];
	var remaining = myArray.shift();
	var sum = firstValue + remaining;
	if(myArray.length != 0){
		arrayAdding(remaining);
		return arrayAdding(remaining) + sum; 
	}else{
		return false;
	}
}
	//I know that that ^ does not work and I did not see the add(x) function that you wrote in class
totalNumber = 0;
for (var i=0; i != myArray.length; i++) {
       	totalNumber = totalNumber + a[i];
  }
       	return totalNumber;