/*TMODJS:{"version":6,"md5":"f2311dcdfd97f8871b2b58fc8fb23154"}*/
template('layer-two',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,two=$data.two,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<h2>第二层</h2> <h2>';
$out+=$escape(two);
$out+='</h2> <div id="layer_three"> ';
include("./layer-three");
$out+=' </div>';
return new String($out);
});