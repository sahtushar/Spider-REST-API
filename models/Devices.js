const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var operator_schema = new Schema({
  // NOTE Brands details
  company: { type: String, default: null },
  company_id: { type: Schema.Types.ObjectId, default: null },

  // NOTE Device page
  product_page_link: { type: String },
  product_image: { type: String },
  desc: { type: String },
  product_name: { type: String, index: true, default: null },

  status: { type: String },
  attempt: { type: Number },
  error: { type: Schema.Types.Mixed, default: [] },
  crawler_error: { type: Schema.Types.Mixed, default: [] },
  crawled_dates: { type: [Date] },
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date },

  // NOTE Device crawler_method data
  review: { type: Schema.Types.Mixed, default: {} },
  release_date: { type: String },
  dimensions: { type: String },
  os: { type: String },
  storage: { type: String },
  device_images: { type: Schema.Types.Mixed, default: [] }
});

let Devices = mongoose.model("Devices", operator_schema, "Devices");

// NOTE make pending service request model for external use
module.exports = Devices;
