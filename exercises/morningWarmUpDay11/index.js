// var phrase = 'slimy smelly solution';

function countChar(str){
    var output = {};
    for(var i = 0; i < str.length; i++ ){
        var phrase = str.charAt(i);
        if(output[phrase]) {
            output[phrase]++;
        }else{
            output[phrase] = 1;
        }
    }
    return output;
}
// console.log(countChar("test"));
const sortedArray = [];
// loop through each key/value pair and separate objects to the array
for(var key in output){
    // console.log(output[key])
    sortedArray.push({[key]:output[key] })
}
return sortedArray.sort(function(obj1, obj2){
    var key1 = Object.keys(obj1)[0];
    var key2 = Object.keys(obj2)[0];
    return obj2[key2] - obj1[key1];
})
console.log(countChar("testings"))