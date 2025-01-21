let data = [12,6,8,11,15,9,20,5];
let temp;

for(let i=0;i<data.length;i++)
{

   for(let j=0;j<data.length;j++){

      
      if(data[j] > data[j+1]){
         temp = data[j];
         data[j]=data[j+1];
         data[j+1] =temp
      }

   }
   
}
console.log(data);