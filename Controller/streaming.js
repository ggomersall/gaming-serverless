const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const dbConnection = require('../dbConfigs');
const StreamingService = require('../Services/streaming');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// base url to test API
app.get('/', async (req, res) => {
  await res.send('<h2>Welcome to the JustGiving Game Streaming API</h2>');
});

// creating a new game stream for a user
app.post('/streaming', async (req, res) => {
  try {
    await dbConnection();
    const data = req.body;
    const {
      isStreamingEnabled,
      streamingServiceType,
      streamingServiceId,
      userId
    } = data;
    if (!data) {
      return 'Please pass all required fields!';
    }
    const dataToSave = {
      isStreamingEnabled,
      streamingServiceType,
      streamingServiceId: uuid(),
      userId: uuid()
    };
    let createStream = await StreamingService.createStream(dataToSave);
    if (createStream) res.status(200).send(createStream);
  } catch (err) {
    console.log(err, 'error');
  }
});
