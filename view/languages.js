var langs = require('../lib/resources/programmingLanguage');

module['exports'] = function (opts, cb) {
  var $ = this.$;
  console.log(langs)
  
  Object.keys(langs.languages).forEach(function (key) {
    $('.languages').append('<li>' + key + '</li>');
  });
  cb(null, $.html());
};