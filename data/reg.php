<?php
	header("content-type:application/json;charset=utf-8");
	require("init.php");
	$uname=$_REQUEST["uname"] or die('{"code":-2,"msg":"uname needed"}');
	$email=$_REQUEST["email"] or die('{"code":-3,"msg":"email needed"}');
	$upwd=$_REQUEST["username"] or die('{"code":-4,"msg":"username needed"}');
	$sql="INSERT INTO t_user VALUES(null,$uname,$email,$upwd)"
	$result=mysqli_query($conn,$sql);
	$uid = mysqli_insert_id($conn);
    $output = [
      'code'=>1,
      'msg'=>'注册成功',
      'uid'=>$uid
    ];
    if($result===true){
      echo json_encode($output);
    }else{
      echo '{"code":-5,"msg":"注册失败"}';
    }

	
