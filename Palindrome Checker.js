function palindrome(str) {
  
    var regex = /\W|[_]/g;
    //gets rid of any non-alphaNumeric characters
    const noPunc = str.replace(regex, '');
    //splits the string by letter
    let splitStr = noPunc.split('');
    //makes it all the smae case
    splitStr = splitStr.map(e => e.toLowerCase());
      
    let reverse = [];
    //reverses the string 
    for (let i in splitStr){
    
      reverse.unshift(splitStr[i])
      
    }
    //checks if the char placements are the same  
    const newArr = (reverse.map((e, index, arr) => (splitStr.indexOf(e) === arr.indexOf(e))));
   
   //if everything is the same return true else one false flag means it's not a palindrome.
   for (let i in newArr){
     if (newArr[i] === false){
       return false;
     }
     
   } 
    return true;
    
  }
  
  palindrome("almostomla")