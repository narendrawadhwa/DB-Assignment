const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ProductInventory', productInventorySchema);
