const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

	event.preventDefault();

	const username = form.username.value.trim();
	const email = form.email.value.trim();
	const password = form.password.value.trim();
	const confirm_password = form.confirm_password.value.trim();

	if (username === '') {
		alert('請輸入用戶名');
		return;
	}

	if (email === '') {
		alert('請輸入電子郵件地址');
		return;
	}

	if (password === '') {
		alert('請輸入密碼');
		return;
	}

	if (password !== confirm_password) {
		alert('密碼不匹配，請重新輸入');
		return;
	}

	if (username.length > 10) {
		alert('用戶名名必須少於 10 個字元');
		return;
	}
	  
	if (password.length < 8) {
		alert('密碼必須至少為8個字元');
		return; 
	}
	
	if (!email.includes('@') || !email.includes('.com')) {
		alert('電子郵件必須包含 @ 和 .com');
		return;
	}

	localStorage.setItem('username', username);
	localStorage.setItem('email', email);
	localStorage.setItem('password', password);

	alert('註冊成功！');

	window.location.href="/Index/SLIN/Login.html";
});
