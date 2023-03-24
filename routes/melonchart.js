var express = require('express');
var router = express.Router();
const app = express();
var cheerio = require('cheerio');
var request = require('request');
var url = 'http://www.melon.com/chart/';
var stitle = new Array(),
    artist = new Array(),
    up_date,
    up_time;
var rank = 100;  //100위까지 확인

router.get('/api/get/chart', function(req, res){
request(url, function(error, response, html){
    if (!error) {
      var $ = cheerio.load(html);
   
     // 곡명 파싱
      for (var i = 0; i < rank; i++) {
        $('.ellipsis.rank01 > span > a').each(function(){
          var title_info = $(this);
          var title_info_text = title_info.text();
          stitle[i] = title_info_text;
          i++;
        })
      }
      for (var i = 1; i < rank+1; i++) {
        console.log(stitle[i-1]);
      }
      // // 업데이트 시간
      // console.log("("+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨)");
      res.status(200).json(stitle)
    }
  });
});
module.exports = router;