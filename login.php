<?php 

   $app_id = "236279";
   $app_secret = "605dddd8b117428c97369dfb283eb796";
   $my_url = "http://xiexieshi.com/onemanu/login.php";
   $grant_type="authorization_code"; //支持的授权类型

   session_start();
   $code = $_REQUEST["code"];

   if(empty($code)) {
     $_SESSION['state'] = md5(uniqid(rand(), TRUE)); //CSRF protection
     $dialog_url = "http://graph.renren.com/oauth/authorize?client_id=" 
       . $app_id."&response_type=code" ."&redirect_uri=" . urlencode($my_url) . "&state="
       . $_SESSION['state'];

     echo("<script> top.location.href='" . $dialog_url . "'</script>");
   }

   if($_REQUEST['state'] == $_SESSION['state']) {
     $token_url = "https://graph.renren.com/oauth/token?"
       . "client_id=" . $app_id . "&redirect_uri=" . urlencode($my_url)
       . "&client_secret=" . $app_secret ."&grant_type=" . $grant_type . "&code=" . $code;

       echo $token_url;
     $response = @file_get_contents($token_url);
     $params = null;
     echo $response;
     parse_str($response, $params);
     var_dump($params);

     $graph_url = "https://api.renren.com/v2/user?access_token=" 
       . $params['access_token'];

     $user = json_decode(file_get_contents($graph_url));
     echo("Hello " . $user->name);
   }
   else {
     echo("The state does not match. You may be a victim of CSRF.");
   }

 ?>