function sum(arr){
    // syntax reduce: arr.reduce(callback[, initialValue])
    return arr.reduce(function(a,b){
        return a + b
    },0);
}


module.exports.sum = sum;