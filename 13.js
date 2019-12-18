var newLi = () => {
  var elementLI = document.createElement("li");
  var text = document.createTextNode("!!!");
  elementLI.appendChild(text);
  var elementUL = document.getElementById("myunique");
  elementUL.insertBefore(elementLI, elementUL.firstChild);
};
newLi();
