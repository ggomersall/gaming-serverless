# gaming-serverless

building a basic serverless app for saving streaming profiles for gaming.

### To start project

To install dependancies run:

```bash
yarn
```

To start the API run:

```bash
yarn start
```

Then go to the base url here:===> `http://localhost:3000`

Path:

/ - base path
/streaming - To create a new stream
/streaming - To get all the streams from the db
/streaming/{streamingId} - To get a stream by Id from the db

### Project requirements

- have mongodb install and the service running

### Payload to create a new stream

http://localhost:3000/

`Requestbody`

```
{
	isStreamingEnabled: true,
	streamingServiceType: "twitch",
	streamingServiceId: "valkia",
}
```
