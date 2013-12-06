jQuery('#textarea2').atwho({
  at: "@",
 callbacks: {
     matcher: function(flag, subtext, should_start_with_space) {
        var match, regexp;
        flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        if (should_start_with_space) {
          flag = '(?:^|\\s)' + flag;
        }
        regexp = new RegExp(flag + '([A-Za-z0-9_\+\-\.]*\\s?)*$|' + flag + '([^\\x00-\\xff]*)$', 'gi');
        match = regexp.exec(subtext);
        if (match) {
          return match[2] || match[1];
        } else {
          return null;
        }
      }
        },
  data: ["26 U.S.C. 501", "two", "three", "this and that"],
  tpl: "<li data-value='@${name}'>${name}</li>",
  insert_tpl: "<a href='${atwho-data-value}'>${atwho-data-value}</a>"
}).atwho({
  at: ":",
  data: ["+1", "-1", "smile"]
});
