import * as express from "express";
import log from "./log";
import searchImagemByName from './home'

const app = express();

app.get("/", (req, res) => {
    res.json(JSON.stringify({ok: 1})).end();
});
app.get("/pesquisaImagem",searchImagemByName)

app.listen(process.env.PORT || 5000, () => {
    log.info("app running");
});
