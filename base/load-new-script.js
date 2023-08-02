
//replace script.src
//replace .bhe
(function() {
    if (typeof window.bhe === 'undefined') {
      var s = document.createElement('script');
      s.crossOrigin = "anonymous";
      s.type = 'text/javascript';
      s.src = 'https://cdn.jsdelivr.net/gh/Udjim/ti/parsers/bhe.js';
  
      // Define a function to be called when the script is loaded
      s.onload = function() {
        window.bhe(); // Call the function after the script is loaded
      };
  
      document.getElementsByTagName('head')[0].appendChild(s);
    } else {
      window.bhe(); // Call the function directly if it's already defined
    }
  })();



//https://jscompress.com
//https://chat.openai.com/c/22e94ff8-11db-4aeb-9a5f-8e0b68484b97
//minify compress and create from this js a js that can be added as a bookmark, it must start with 'javacsript:'