var assert=require('assert');
function add(a,b){
    return a+b;
}
ex=add(1,3);
try {
    assert(ex==4,"one plus two is three");
} catch (error) {
    console.log(error);
}
