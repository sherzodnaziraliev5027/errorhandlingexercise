
try{
    console.log(a);
    let a = 3;
}
catch(e){
    throw new Error('let must be declared')
}
let b=1/0;
try{
    if(b==Infinity){
    throw new Error('cannot be divided zero')
}
}
catch(e){
    console.log(e);
}


