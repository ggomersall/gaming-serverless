const Streaming = require('../Model/streaming');

module.exports = {
  async createStream(streaming) {
    let result = await Streaming.create(streaming);
    if (result) {
      return {
        data: streaming,
        message: 'Gaming stream successfully created!'
      };
    }
    return 'Error creating new Gaming stream';
  },

  async getAllStreams() {
    let streaming = await Streaming.find();
    if (streaming) return streaming;
    return 'Error fetching gaming streams from db';
  },

  async getStreamById(streamingId) {
    let streaming = await Streaming.findOne(streamingId);
    if (streaming) return streaming;
    return 'Error fetching gaming stream from db';
  }
};
