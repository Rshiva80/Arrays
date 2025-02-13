function anal(str1,str2){
    let result = true;
    let ObjStr = {};

    if(str1.length != str2.length){
        return result=false;
    }
    for(ch of str1){
        ObjStr[ch] = (ObjStr[ch]||0) +1 ;
    
    }
    
    for(ch of str2){
       if(!ObjStr[ch])
        {

        return false
       } 
       ObjStr[ch]--;
    }

    return result ;
}


let word1 = "listen1";
let word2 = "silent";
console.log(anal(word1,word2))
 
