<!--通用登录弹窗-->
<!--半透明背景层-->
<!--<div class="loginBg"></div>-->
<!--登录窗口层-->
<div class="loginWindow" method="post">
	<div class="wk_iconfont closeLogin">&#xe60c;</div>
	<!--手机号码输入-->
	<div class="loginInput" id="loginPhone">
		<input placeholder="输入手机号" type="text" name="mobile" maxlength="11" autocomplete="off"/>
		<span class="sendCode">获取动态密码</span>
	</div>
	<!--图形验证码输入-->
    <div class="loginInput" id="loginSecurityImg">
		<input name="imgCode" type="text" placeholder="输入右侧验证码" class="checkinput" maxlength="4"/>
		<span class="vertifyImg"><img title="点击换一张" src="/member/getVertifyCode.rest"></span>
    </div>
	<!--验证码输入-->
	<div class="loginInput" id="loginSecurity" checkType="numberCheck">
		<input type="text" name="code" maxlength="6"/>
		<p class="placeHolderText">请填写动态密码</p>
	</div>
	<div id="loginButton" class="sendCodeBottom" name="submit">获取动态密码</div>
</div>