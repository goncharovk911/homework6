window.onload = function ecurs() {
  function scrollDown() {
    window.scrollTo(0, 4000);
   
    setTimeout(scrollUp, 1000);
  }
  setTimeout(scrollDown, 3000);
  function scrollUp() {
    window.scrollTo(0, 0);
    
    setTimeout(scrollDown, 3000);
  }
};
