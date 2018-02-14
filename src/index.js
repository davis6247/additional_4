module.exports = function multiply(first, second){   //both String  
  first = first.split('').reverse();
  second = second.split('').reverse();
    var result = [];

    for (var i = 0; i < first.length; i++) {      //iterate over first operand
        for (var j = 0; j < second.length; j++) {    //iterate over second operand
            if (result[i + j] == undefined) {    //create slot in the [result]    
                result[i + j] = 0;
            }

            result[i + j] += first[i] * second[j];
        }
    }

    for (var i = 0; i < result.length; i++) {   //summing up all number in the [result] with carry over
        if (result[i] >= 10) {
            if (result[i + 1] == undefined) {   //create slot in the [result] 
                result[i + 1] = 0;
            }

            result[i + 1] += Math.floor(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
  // your solution
}