const repeatString = function(string, num) {
    let outString = "";
    if (num < 0) {
        return "ERROR"
    }else{
         for(i=0;i<num;i++){
            outString = outString + string;
      }
      return outString
    }   
};

// Do not edit below this line
module.exports = repeatString;
