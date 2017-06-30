/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-29 12:17:29
 * @version $Id$
 */
var data = []
var dataStr = '1、img1<br>\
<br>\
导演:xxx<br>\
编剧:xxx<br>\
<br>\
<br>\
2、img2<br>\
<br>\
导演:xxx<br>\
编剧:xxx<br>\
<br>\
<br>\
3、img3<br>\
<br>\
导演:xxx<br>\
编剧:xxx<br>\
<br>\
<br>\
4、img4<br>\
<br>\
导演:xxx<br>\
编剧:xxx<br>\
'
 var d = dataStr.split('<br><br><br>');
 for(var i = 0;i<d.length;i++){
 	var c = d[i].split('<br><br>');
 	data.push({
 		img:'image/'+c[0].replace('、',' ')+'.jpg',
 		caption: c[0].split('、')[1],
 		desc: c[1]
 	});
 }


