const {HOST, PORT} = require('./config');
const http = require('./http');
const {server} = require('./socket');
const usersRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");
const authenticationRouter = require("./routes/authentication");

http.use('/users', usersRouter);
http.use('/movies', moviesRouter);
http.use('/', authenticationRouter);

server.listen(PORT, HOST, () => {
    console.log(`App running on port ${PORT}.`)
});
