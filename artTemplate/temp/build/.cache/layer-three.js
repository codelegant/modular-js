/*TMODJS:{"version":1,"md5":"832dc25170b9763da918c44f7d266e76"}*/
template('layer-three',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,data=$data.data,$out='';$out+='<h3>第三层</h3> <h3>';
$out+=$escape(data.three);
$out+='</h3>';
return new String($out);
});