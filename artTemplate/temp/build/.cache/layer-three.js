/*TMODJS:{"version":2,"md5":"206edc4d5d8778809293b55bf9d33cbe"}*/
template('layer-three',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,three=$data.three,$out='';$out+='<h3>第三层</h3> <h3>';
$out+=$escape(three);
$out+='</h3>';
return new String($out);
});