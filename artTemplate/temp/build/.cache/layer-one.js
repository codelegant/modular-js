/*TMODJS:{"version":12,"md5":"218451f329f5cf8e9b97ed568a2ad960"}*/
template('layer-one',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,one=$data.one,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<h1>第一层</h1> <h1>';
$out+=$escape(one);
$out+='</h1> <div id="layer_two"> ';
include("./layer-two");
$out+=' </div>';
return new String($out);
});