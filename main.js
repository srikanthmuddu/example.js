
var textarea=document.getElementById("code");
var reset=document.getElementById("reset");
var code=textarea.value;
var output=document.querySelector(".output");
var solution=document.getElementById("solution");
function drawOutput(){
  output.innerHtml = textarea.value;

}
reset.addEventListener("click",function(){
  textarea.value = code;
  drawOutput();
});
solution.addEventListener("click",function(){
  textarea.value = '<em>this is my area</em>';
  drawOutput();
});
textarea.addEventListener("input",drawOutput);
window.addEventListener("load",drawOutput);
