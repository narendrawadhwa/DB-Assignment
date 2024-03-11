const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProductCategory', productCategorySchema);
