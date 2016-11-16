const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const pause = require('connect-pause')

const delay = process.argv[2] || 0
server.use(pause(delay));

const api = {
    status: require('./status.json'),
    snapshot: require('./snapshot.json'),
    history: require('./history.json')
}
const router = jsonServer.router(api);

server.use(middlewares);

server.post('/auth', (req, res) => {
    res.jsonp({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFuZHJlIiwibmFtZSI6IkFuZHJlIENvc3RhIn0.TNwRiwaaAv82uENJL6eC3D3RYPCtBPC4Z53PwUuFju0"
    })
});

server.use('/api', router);

const port = process.argv[3] || 3001
server.listen(port, () => {
    console.log(`Fake Server running on port :${port}. Delay: ${delay}`);
});
