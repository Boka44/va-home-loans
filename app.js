const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
// const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
// const session = require("express-session");
const moment = require('moment');
const fs = require('fs');
const PORT = process.env.PORT || 443;
const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'va-loans')));
app.use('/', express.static('va-loans/dist/va-loans'));

// require('./config/database');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

require('./config/env/development');

require('./api/routes/index')(app);



// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};

    // error message
    const response = req.app.get('env') === 'dev' ? {
        success: false,
        message: err.message,
        stack: err.stack
    } : {
        success: false,
        message: err.message,
        status: err.status || 500
    };

    // send error message
    res.status(err.status || 500);
    res.send(response);
});

app.all('*', (req, res) => {
    console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
    res.status(200).sendFile(__dirname + "/va-loans/dist/va-loans/index.html");
  });

// app.use(session({ 
// 	secret: "itsASecretToEveryone",
// 	resave: false,
// 	saveUninitialized: false
//  }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
})
