module.exports= function (app) {
    let userController = require('../controllers/userController');


    app.route('/upload2')
        .post(userController.upload2);

    app.route('/write_data')
        .post(userController.write_data);

    app.route('/get_all_data')
        .get(userController.get_all_data);

    app.route('/clear_db')
        .delete(userController.clear_db);
};