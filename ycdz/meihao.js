/*******************************
美豪酒店
*******************************
[rewrite_local]
^https:\/\/api\.wx\.gcihotel\.net\/api\/shop url script-response-body https://raw.githubusercontent.com/kiim-wong/Quantumult-X/main/ycdz/meihao.js
[mitm] 
hostname = api.wx.gcihotel.net
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const mumu = '/flashGoodsDetail';


if (url.indexOf(mumu) != -1) {
    obj.retVal.flashGoods.dayStartTime = "2022-11-01 10:00:00";
    obj.retVal.flashGoods.startTime = "2022-11-01 10:00:00";

	body = JSON.stringify(obj);
}


$done({body});
