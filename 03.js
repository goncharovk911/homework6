window.onload = function() {
  this.document.getElementById("textColor").onkeyup = function() {
    if (isNaN(this.value)) {
      this.style.color = "red";
    } else {
      this.style.color = "green";
    }
  };
};
