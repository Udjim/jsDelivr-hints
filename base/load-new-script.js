
//replace script.src
//replace .bhe
(function() {
    if (typeof window.bhe === 'undefined') {
      var s = document.createElement('script');
      s.crossOrigin = "anonymous";
      s.type = 'text/javascript';
      s.src = 'https://cdn.jsdelivr.net/gh/Udjim/ti/parsers/bhe.js';
      s.onload = function() {window.bhe();};
      document.getElementsByTagName('head')[0].appendChild(s);
    } else {window.bhe();}
  })();


//INFO:
//https://jscompress.com
//https://chat.openai.com/c/22e94ff8-11db-4aeb-9a5f-8e0b68484b97
//chatGPT promt:
//minify compress and create from this js a js that can be added as a bookmark, it must start with 'javacsript:'