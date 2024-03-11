const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema(
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
    discount_percent: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Discount', discountSchema);
