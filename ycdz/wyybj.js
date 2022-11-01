/*******************************
网易云笔记解锁本地VIP
*******************************
[rewrite_local]
^https:\/\/note\.youdao\.com\/yws\/mapi\/payment\?method= url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/wyybj.js
[mitm] 
hostname = note.youdao.com
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const keyword1 = 'status';
const keyword2 = 'getPaidStatus';


if (url.indexOf(keyword1) != -1) {
    obj.end = 4077286408000;
    obj.userType = 2;
    obj.service = 1;
    obj.start = 1667304942595;

	body = JSON.stringify(obj);
}

if (url.indexOf(keyword2) != -1) {
    obj.lastPayTime = 1667304936000;
    obj.lastRenewEndTime = 4077286408000;
    obj.paid = 1;

	body = JSON.stringify(obj);
}

$done({body});
