var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
const app = express();
var cheerio = require('cheerio');
var request = require('request');
var url = 'http://www.melon.com/chart/';
var data = new Array(),
    artist = new Array(),
    up_date,
    up_time;
var rank = 100;  //100위까지 확인


function getrank(){
request(url, function(error, response, html){
    if (!error) {
      var $ = cheerio.load(html);
   
     // 곡명 파싱
      for (var i = 0; i < rank; i++) {
        $('.ellipsis.rank01 > span > a').each(function(){
          var title_info = $(this);
          var title_info_text = title_info.text();
          data[i] = title_info_text;
          i++;
        })
      }
      // for (var i = 1; i < rank+1; i++) {
      //   console.log(data[i-1]);
      // }
      // // 업데이트 시간
      // console.log("("+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨)");
    }
  });
console.log("최신화 완료!");
}
getrank();
setInterval(getrank, 120000)


router.get('/api/get/chart', function(req, res){
      const songn = req.query.songn;
const starttime = new Date(Date.UTC(2023, 2, 27, 9, 0, 0)); // 스트리밍 시작 시간을 UTC 시간으로 설정
		  const songIndex = data.indexOf(songn);
			const URL = "https://discord.com/api/webhooks/1089103459954991144/jTvIaBCeflwu9CdJOae_ds0M2yWMZkf2dYGpJz0ZeawaLwSAHKDm9O3W0UK9hTrtPCsl";
            if (songIndex !== -1) { // 곡이 리스트에 존재할 경우
			res.status(200).json(`${songn}은(는) ${songIndex + 1}위입니다!`);
            } 
			else { // 곡이 리스트에 존재하지 않을 경우
            // console.log(`'에에에에에엥ㅇ에에엥엥에ㅔㅔㅔ에에엥엥 버그나 아웃이이다야아아아아아아아아'`); // 에러 메시지 출력
			res.status(200).json(`${songn} 은(는) 차트아웃 상태입니다`);
			// const nowtime = new Date();
			// const dday = starttime - nowtime;
			// const ddayHour = Math.floor((dday / (1000*60*60)) % 24);
			// const ddayMin = Math.floor((dday / (1000*60)) % 60);
			// res.status(200).json(`스밍 시작까지 ${ddayHour}시간 ${ddayMin}분 남았습니다!`);
			const msg = {
			"content": '차트아웃을 확인해주세요!',
}
			fetch(URL, {
    			"method":"POST",
    			"headers" : {
	    		"content-type": "application/json"
    		},
    		"body": JSON.stringify(msg)
})
			}
});

module.exports = router;