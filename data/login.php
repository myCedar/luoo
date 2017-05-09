<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$email=$_REQUEST["email"] or die('{"code":-2,"msg":"uname needed"}');
	$pwd=$_REQUEST["pwd"] or die('{"code":-3,"msg":"uname needed"}');
	$sql="SELECT * FROM t_user";
	$result=mysqli_query($conn,$sql);
	while($row=mysqli_fetch_assoc($result)){
		if($row['email']==$email&&$row['pwd']==$pwd){
		echo '{"code":1,"msg":"登陆成功","uid":'.$row['uid'].',"email":"'.$row['email'].'"}';
		break;}
	};
	if($row===null){
		echo '{"code":-1,"msg":"密码错误"}';
	};
	
