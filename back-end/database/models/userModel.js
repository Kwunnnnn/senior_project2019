let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name_test: {type: String, required: false},
    sound_file: {type: String, required: false},
    bg_file: {type: String, required: false},
    num_person: {type: Number, required: false},
    position_touch: {type: Boolean, required: false},
    time_test: {type: String, required: false},
}, {timestamps: true
});

module.exports = mongoose.model('User',userSchema);
