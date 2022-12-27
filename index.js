
const buildApp = require("./app/server");

const app = buildApp();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => console.log(`Running on port http://${host}:${port}`));
