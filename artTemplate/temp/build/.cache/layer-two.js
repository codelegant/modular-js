/*TMODJS:{"version":1,"md5":"93d178d2036ca9ccfeb2f8636fc8b142"}*/
template('layer-two',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<h2>第二层</h2> <h2>';
$out+=$escape(data.two);
$out+='</h2> ';
include("./layer-three");
return new String($out);
});