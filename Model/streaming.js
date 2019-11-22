const mongoose = require('mongoose');
const StreamingSchema = new mongoose.Schema(
  {
    isStreamingEnabled: { type: Boolean },
    streamingServiceType: { type: String },
    streamingServiceId: { type: String },
    userId: { type: String }
  },
  { timestamps: true }
);

const StreamingModel = mongoose.model('streaming', StreamingSchema);
module.exports = StreamingModel;
