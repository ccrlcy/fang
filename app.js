var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.get('/', (req, res) => {
// 	res.send('express server')
// })


// app.get('/', (req, res) => { res.send('index page') });
// app.get('/test', (req, res) => { res.send('test page')});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.listen(3000, () => {
	console.log('3000번 port에 http 실행중')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index')
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
