const { app, BrowserWindow } = require("electron");

function createHelloWorldWindow() {
	const window = new BrowserWindow({
		title: "Hello world",
		width: 200,
		height: 200,
	});

	const html = `
		<!doctype html>
		<html lang="fr">
			<head>
				<meta charset="UTF-8" />
				<title>Hello world</title>
				<style>
					body {
						margin: 0;
						height: 100vh;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #111;
						font-family: sans-serif;
					}

					.label {
						color: yellow;
						text-align: center;
						font-size: 24px;
						width: 100%;
					}
				</style>
			</head>
			<body>
				<div class="label">Hello world</div>
			</body>
		</html>
	`;

	window.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
}

app.whenReady().then(createHelloWorldWindow);

app.on("window-all-closed", () => {
	app.quit();
});
