const createError 				= require('http-errors');
const express 					= require('express');
const path 						= require('path');
const cookieParser 				= require('cookie-parser');
const logger 					= require('morgan');
const bodyParser 				= require("body-parser");
const passport					= require("passport");
const session 					= require('express-session')
const LocalStrategy 			= require("passport-local");
const mongoose 					= require("mongoose");
// const passportLocalMongoose 	= require("passport-local-mongoose");


//connect to databse

mongoose.connect("mongodb://localhost:27017/surf-shop", {useNewUrlParser: true});

// requires the model with Passport-Local Mongoose plugged in
const User 			= require('./models/user');
const indexRouter 	= require('./routes/index');
const postsRouter 	= require('./routes/posts');
const usersRouter 	= require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/************** Passport goes before routes and after cookie pareser	*/
//INCLUDE EXPRESS SESSION before Passport is important
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
//Passport starts
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/************** Passport goes before routes and after cookie pareser	*/

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

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
