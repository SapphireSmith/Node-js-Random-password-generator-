const http = require('http');

function generatePassword() {
	var length = 10,
		charset =
"@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz",
		password = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		password += charset.charAt(Math.floor(Math.random() * n));
	}
	return password;
}

const server = http.createServer((req, res) => {
		res.end(`
		<!doctype html>
		<html>
		<body>
			<h1> ${generatePassword()} </h1>
			<form action="/">
				<button>Generate New Password</button>
			</form>
		</body>
		</html>
	`);
});

server.listen(3000, () => {
	console.log("lishing on http://localhost:3000");
});
