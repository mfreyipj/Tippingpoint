
function increaseAmount(){
  var currentAmount = document.getElementById("aSpan").innerHTML.substring(0,4);
  document.getElementById("aSpan").innerHTML = (Number(currentAmount)+0.05).toFixed(2) + "€" ;
  console.log(currentAmount);
}

function decreaseAmount(){
  var currentAmount = document.getElementById("aSpan").innerHTML.substring(0,4);
  document.getElementById("aSpan").innerHTML = (Number(currentAmount)-0.05).toFixed(2) + "€" ;
  console.log(currentAmount);
}
