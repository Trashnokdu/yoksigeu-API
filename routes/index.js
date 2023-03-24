const forbiddenword = [
  "강간",
  "개같",
  "ㅅ끼",
  "새끼",
  "걸래",
  "게이",
  "고자",
  "나대",
  "나락",
  "넌씨눈",
  "노인",
  "눈새",
  "눈깔",
  "느개비",
  "느그",
  "느금",
  "도랐",
  "대가리",
  "대갈",
  "대깨",
  "뒤질",
  "뒈져",
  "듣보",
  "등신",
  "또라이",
  "로리",
  "맘충",
  "망겜",
  "머가리",
  "머갈",
  "먹금",
  "멍청",
  "못생김",
  "ㅂㅅ",
  "ㅂㅈ",
  "ㅂㅊ",
  "변태",
  "별창",
  "병맛",
  "보이루",
  "보라니",
  "븅신",
  "빙신",
  "빡쳐",
  "ㅅㅂ",
  "ㅅㅃ",
  "ㅅㅋ",
  "ㅆㅂ",
  "ㅆㅃ",
  "싸개",
  "샹",
  "새끼",
  "색함",
  "슈발",
  "스바",
  "ㅅ발",
  "시발",
  "씨발",
  "씨빨",
  "시벌",
  "씨벌",
  "씨뻘",
  "십덕",
  "십타쿠",
  "썅",
  "쓰레기",
  "씹",
  "아가리",
  "아닥",
  "아재",
  "알몸",
  "야동",
  "야랄",
  "야한",
  "어쩔",
  "오타쿠",
  "애로",
  "에로",
  "ㅈㄴ",
  "ㅈㄹ",
  "ㅉㅈ",
  "ㅉㅉ",
  "자살",
  "장애",
  "정병",
  "조낸",
  "조루",
  "죠낸",
  "졸라",
  "존나",
  "졸라",
  "증오",
  "좆",
  "죽어",
  "쥰내",
  "지랄",
  "찌찌",
  "찐따",
  "창녀",
  "창놈",
  "친놈",
  "초딩",
  "쿰척",
  "패드립",
  "헤으응",
  "호빠",
  "ㅗ",
  "fuck",
  "sex",
  "tlqkf"
]

var request = require('request');
var express = require('express');
var router = express.Router();
const wordList = forbiddenword;
const replaceChar = "​";
const app = express();
/* GET home page. */
router.get('/', function(req, res, next) {

});
router.get('/api/get/detect', function(req, res){
  let fine = req.query.str;
  for (var i = 0; i < wordList.length; i++) {
    var regex = new RegExp(wordList[i], "gi");
    var replacement = wordList[i].split('').join(replaceChar);
    fine = fine.replace(regex, replacement);
  }
  res.status(200).json(fine);
})

module.exports = router;
