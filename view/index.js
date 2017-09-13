module.exports = function(app, router){
    require('./main')(app,router)
    require('./add-data')(app,router)
};
