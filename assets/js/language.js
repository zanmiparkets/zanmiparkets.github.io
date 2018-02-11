  var x = null; //Initialise x
  $(document).ready(function() {
      x = document.body.getElementsByTagName('*');
      let esButton = $('#langtog-es'),
          enButton = $('#langtog-en'),
          frButton = $('#langtog-fr');
      var currentLang = getCookie("lang"); //en, es, fr, null
      if (currentLang == null || currentLang == "") {
          document.cookie = "lang=es";
          switchLang('es');
      } else {
          switchLang(currentLang);
      }
      esButton.on('click', function(event) {
          event.preventDefault();
          /* Act on the event */
          switchLang('es');
          console.log('es');
      });
      enButton.on('click', function(event) {
          event.preventDefault();
          /* Act on the event */
          switchLang('en');
          console.log('en');
      });
      frButton.on('click', function(event) {
          event.preventDefault();
          /* Act on the event */
          switchLang('fr');
          console.log('fr');
      });
  });

  function getCookie(a) {
      var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
  }

  function switchLang(langName) {
      var langs = ["en", "es", "fr"];
      langs.splice(langs.indexOf(langName), 1);
      for (var i = 0; i < x.length; i++) {
          if (x[i].className.indexOf(langName) != -1) {
              x[i].style.display = 'block';
          }
          if (x[i].id.indexOf('langtog-' + langName) != -1) {
              x[i].style.display = 'none';
          }
          for (var j = 0; j < langs.length; j++) {
              if (x[i].className.indexOf(langs[j]) != -1) {
                  x[i].style.display = "none";
              }
              if (x[i].id.indexOf('langtog-' + langs[j]) != -1) {
                  x[i].style.display = 'inline-block';
              }
          }
      }
      document.cookie = "lang=" + langName;
  }