<script>
     //Task 1
for (var i=0; i< 100; i++) { 
	if ( i % 2 == 0) {
		console.log(i);
	}
}; 

    //Task 2
for (var i=0; i< 100; i++){
    if (i%3 == 0 && i%4 == 0){
        console.log(i);

    }
}
   //task 3
var sum = 0;
for (var i = 1; i<=100; i++){
    //console.log(i);  
    for (var j = i; j <=10; j++){
        if (j%i == 0){
        console.log(j);
        sum += j;
        }
    }

}
console.log(sum);

var sum = 0;
for (var i = 1; i<=10; i++){
    //console.log(i);  
    for (var j = i; j <=10; j++){
        if (j%i == 0){
        console.log(j);
        sum += j;
        }
    }
}
console.log(sum);


    // task 4
var sum = 0;   
for (var i=0; i< 100; i++) { 
	if ( i % 2 == 0) {
        //console.log(i);
		sum+=i;
	}
};
console.log(sum);




</script>
