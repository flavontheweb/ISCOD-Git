const { app, BrowserWindow } = require("electron");
const { HELLO_WORLD_TITLE, HELLO_WORLD_TEXT } = require("./constants.js");

function createHelloWorldWindow() {
	const window = new BrowserWindow({
		title: HELLO_WORLD_TITLE,
		width: 400,
		height: 400,
	});

	const html = `
		<!doctype html>
		<html lang="fr">
			<head>
				<meta charset="UTF-8" />
				<title>${HELLO_WORLD_TITLE}</title>
				<style>
					body {
						margin: 0;
						height: 100vh;
						display: flex;
						align-items: center;
						justify-content: center;
						background: yellow;
						font-family: sans-serif;
					}

					.label {
						color: #111;
						text-align: center;
						font-size: 24px;
						width: 100%;
					}
				</style>
			</head>
			<body>
				<div class="label">${HELLO_WORLD_TEXT}</div>
			</body>
		</html>
	`;

	window.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
}

app.whenReady().then(createHelloWorldWindow);

app.on("window-all-closed", () => {
	app.quit();
});
