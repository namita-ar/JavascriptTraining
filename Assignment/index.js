

function btnInlineOnClick(){
document.getElementById("pInline").innerHTML="On Click Event Triggered";
console.log("1122")
}
document.getElementById("btnLargest").addEventListener("click",function(e){
    var arr=[];
    for(i=0;i<=20;i++)
    {
        arr[i]=Math.floor(Math.random()*100);
    }
    console.log(arr);
    document.getElementById("pArray").innerHTML="Array:"+arr;
    document.getElementById("pLargest").innerHTML="Largest:"+Math.max.apply(null,arr);

});

document.getElementById("divCoord").addEventListener("mouseover",function(e){
console.log(e);
document.getElementById("divCoord").innerHTML="Coordinates: ("+e.x+","+e.y+")"
});