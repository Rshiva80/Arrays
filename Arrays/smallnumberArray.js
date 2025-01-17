let arr = [10,3,6,30,15,100,110,6];

    let min = arr[0];

    for (let i = 1 ; i< arr.length ; i++)
    {
    
    if(arr[i] < min)
     {
        min = arr[i];
     }
  
    }
    console.log(min);

