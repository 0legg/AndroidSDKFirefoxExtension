var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: [
    /http(?:s)?:\/\/d(?:eveloper)?.android.com\/reference\/(.+)\/package-(summary|descr).html/,
    /http(?:s)?:\/\/d(?:eveloper)?.android.com\/reference\/(.+).html/,
    /http(?:s)?:\/\/d(?:eveloper)?.android.com\/reference\/android\/(R(?:\..+)?).html/
  ],
  contentScriptFile: "./ref-inject-code-search.js"
});