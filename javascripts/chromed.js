(function() {
  var addAmazonLinks = function() {
        $("table#books tbody tr").each(function() {
          var title = $(this).find('.title .value');
          var amazonLink = $('<a></a>').attr('href', 'http://www.amazon.com/s/?_encoding=UTF8&camp=1789&creative=390957&field-keywords=' + encodeURIComponent(title.text().trim()) + '&tag=darrinholstco-20')
                                       .attr('target', '_blank')
                                       .html('amazon');
          title.append(' [')
          title.append(amazonLink)
          title.append(']')
        });
      },

      initialize = function() {
        addAmazonLinks();
      };

  initialize();
})();
