let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    userModel = require('./models/userModel'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    fs = require('file-system'),
    router = require('router');

let fileRoutes = require("./routes/file-upload");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users2');

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());
app.use(fileRoutes);

// app.get('/', function(req, res) {
//     return res.send("fuck");
// });

let route = require('./routes/userRoute');
route(app);
// console.log("app listen to port: " + port);

app.listen(port);