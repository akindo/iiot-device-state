# IIoT Device State

## Background
An application that lists IIoT devices and their current state (status, software version, and last reported datetime).

## Getting started

Install Node.js from [here](https://nodejs.org/en/download/package-manager).

Install dependencies:

```
npm i
```

Build:

```
npm run build
```

Run:

```
npm start
```

Run in development mode (automatic rebuild & restart upon save):

```
npm run dev
```

Lint:

```
npm run lint
```

## Tests

Run unit tests:

```
npm test:unit
```

Run integration tests:

```
npm run test:integration
```

Run all tests:

```
npm run test
```


## Log levels

Log level can be changed by prepending `LOG_LEVEL=<log level>` before desired npm script.

Log levels:

```
error
warn
info
debug
trace
```

## REST API Endpoints
Get devices from AWS (mocked)

[localhost:3000/v1/devices](localhost:3000/v1/devices)

Get devices from DB (SQLite)

[localhost:3000/v1/devices/from-db](localhost:3000/v1/devices/from-db)


## Todo
- Improve dependency wiring
- Cleanup controller
  - And remove `/from-db` route, was just for demo purposes
- Decouple presentation (controller) from application layer via Mediator pattern
- Make controller unaware of AWS and DB repos, inject them from main into application layer
- Fix persistence layer
- Error handling
  - Use [result types](https://en.wikipedia.org/wiki/Result_type) where appropriate, instead of exceptions
  - [Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html)
- Tests
- Fix linting errors ([xo](https://github.com/xojs/xo) is strict)
- Etc.
