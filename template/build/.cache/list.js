/*TMODJS:{"version":6,"md5":"c91ec04327d9676e274e4c27ed412603"}*/
template('list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,list=$data.list,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';if(list){
$out+=' <ul> ';
$each(list,function($value,$index){
$out+=' <li>';
$out+=$escape($value);
$out+='</li> ';
});
$out+=' </ul> ';
}
return new String($out);
});