window.onload = function() {
    function show() {
    var ol = document.getElementById("phantEl");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(4));
    ol.appendChild(li);
  }
  function delChild() {
    var list = document.getElementsByTagName("ol")[0];
    list.removeChild(list.children[3]);
  }
  setTimeout(show, 3000);
  setTimeout(delChild, 6000);
};
