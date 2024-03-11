const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
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
    SKU: {
      type: String,
      trim: true,
    },
    category_id: {
      type: ObjectId,
      ref: 'ProductCategory',
    },
    inventory_id: {
      type: ObjectId,
      ref: "ProductInventory",
    },
    price: {
      type: Number,
      required: true,
    },
    discount_id: {
      type: ObjectId,
      ref: 'Discount',
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
