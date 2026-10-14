# hex-rgb-api

A small JavaScript library that converts hex color codes to RGB values, an Express REST API that uses it, and a Mocha test suite with unit and integration tests.

## Requirements

- Node.js 20 or newer

## Install

```bash
npm install
```

## Run the API

```bash
npm start
```

The API listens on http://localhost:3000. Set the `PORT` environment variable to use another port.

## API

`GET /api/hex-to-rgb?hex=<6-digit hex code>`

The `#` sign is optional. In a URL it must be written as `%23`.

```bash
curl "http://localhost:3000/api/hex-to-rgb?hex=ff8800"
```

Response `200 OK`:

```json
{ "hex": "#ff8800", "rgb": { "r": 255, "g": 136, "b": 0 } }
```

A missing or invalid `hex` value returns `400 Bad Request` with an `error` message.

## Run the tests

```bash
npm test
npm run test:unit
npm run test:integration
```

`npm test` runs all tests. The other two commands run only the unit tests for the library or only the integration tests for the API route.
