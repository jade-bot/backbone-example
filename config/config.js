module.exports = function (app, express) {
  app.configure(function () {
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express['static'](__dirname + '/../public'));
    app.use(app.router);
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
  });
};
