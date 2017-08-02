// ==UserScript==
// @name          bukkendoko
// @namespace     https://github.com/shikakun/bukkendoko.user.js
// @description   物件ファンの記事の所在地と家賃をわかりやすくします
// @include       https://bukkenfan.jp/e/*
// @require       https://code.jquery.com/jquery-3.2.1.min.js
// @grant         none
// ==/UserScript==
$(function() {
  var $data = $('.entry-data'),
      place = $data.find('tr:eq(0)').find('td').text(),
      rent  = $data.find('tr:eq(1)').find('td').text();

  $('.entry-title')
    .append('<div class="bukkendoko"></div>')
    .find('.bukkendoko')
    .css({
      'margin-top': '0.5em',
      'color': '#999',
      'font-size': '66%',
      'font-weight': 'normal',
      'line-height': '1'
    })
    .append('<span>' + place + '</span><span>' + rent + '</span>')
    .find('span:nth-child(n + 2)')
    .css('float', 'right');
});
