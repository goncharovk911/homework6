var myPar = document.getElementById("newLi");
var myChi = myPar.childNodes;

for (let index = 0; index < myChi.length; index++) {
  if (index === 13) {
    myChi[index].innerHTML = "HELLO WORLD!";
  }
}
