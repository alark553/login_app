app.directive('noSpecialChar', function() {
  return {
    link: function(scope, ele, attrs) {
      ele.bind('keypress', function(event) {
        var regex = new RegExp("^[^,.\\\\/\^]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          return false;
        }
      });
    }
  };
});