//replace script.src
//replace .p2
(function(){if (typeof window.p1 === 'undefined') {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/Udjim/jsdelivr-hints/base/source-js-template.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    console.log("Script has been loaded");
  }
  else {
    console.log("Using saved script", window.p1);
    window.p1();
}
})();