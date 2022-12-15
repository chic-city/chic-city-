const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var productSchema = mongoose.Schema({
  articleName: { type: String, require: true },
  articleType: { type: String, require: true },
  availableQte: { type: Number, require: true },
  addedBy: { type: String, require: true },
  dateOfCreation: { type: String, default: new Date() },
  description: { type: String, require: true },
  availableSizes: { type: Array, require: true },
  availableColor: { type: Array, require: true },
  // type: { type: Array, require: true },
  category: { type: Array, require: true },
  price: { type: Number, require: true },
});

module.exports = mongoose.model("products", productSchema);
