/*TMODJS:{"version":3,"md5":"1323c80df5ff70c66cdea07a398a7e13"}*/
template('layer-one',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<h1>第一层</h1> <h1>';
$out+=$escape(data.one);
$out+='</h1> ';
include("./layer-two");
return new String($out);
});