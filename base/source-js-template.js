//replace .p2
//replace function BODY in  window.p1 = function () { ... replace this ... }
//remove console.log(window.p1);
(function () {
  console.log(window.p1);
  window.p1 = function () {
    console.log("Yeap, worked!");
  };

  window.p1();
})();

