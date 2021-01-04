const mysql=require("mysql");
const pool=mysql.createPool(
{
	host:"w.rdc.sae.sina.com.cn",
	port:3306,
	user:"22yxoo50o2",
	password:"3x1xy12iy1x1342y4i0khk4h42iwi1k00jwh123y",
	database:"app_uchat03",
	connectionLimit:15
});
module.exports=pool;