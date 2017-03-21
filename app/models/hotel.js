/**
 * Created by Jose Pereira on 21/03/2017.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hotelSchema = new Schema({
    name: { type: String },
    starts: { type: Number },
    price: { type: Number }
});

mongoose.model('hotel', hotelSchema);