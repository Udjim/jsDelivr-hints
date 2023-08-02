//replace script.src
//replace .p2
(function(){if (typeof window.p1 === 'undefined') {
    s = document.createElement('script');
    s.crossOrigin = "anonymous";
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/gh/Udjim/jsdelivr-hints/base/source-js-template.js';
    document.getElementsByTagName('head')[0].appendChild(s);
    console.log("Script has been loaded");
  }
  else {
    console.log("Using saved script");
}
    window.p1();

})();

//replace script.src
//replace .p2
(function(){if (typeof window.bhe === 'undefined') {
    s = document.createElement('script');
    s.crossOrigin = "anonymous";
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/gh/Udjim/ti/parsers/bhe.js';
    document.getElementsByTagName('head')[0].appendChild(s);
  }
    window.bhe();
})();