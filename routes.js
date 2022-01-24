//Insert here your routes, they will be imported to server.js automatically, this way, you keep a more clean architeture.

const routes = require("express").Router();


//#region GET Section
routes.get('/index', async (req, res) => {
  res.redirect('/index.html');
});

routes.get('/', async (req, res) => {
    res.redirect('/index.html');
});

//#endregion

//#region POST Section Checkouts

routes.post('/insert-your-route-here', async (req, res) => {

});

//#endregion

module.exports = routes;


