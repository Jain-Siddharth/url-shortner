# URL Shortener

A URL shortener API built with Express and MongoDB. Create short IDs for URLs, redirect visitors to the original URLs, and check visit counts.

## Requirements

- Node.js and npm
- A MongoDB database (MongoDB Atlas works)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and set your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
   PORT=5000
   ```

   Replace the placeholders with your database credentials and cluster details. For Atlas, ensure the app's outbound IP is allowed in the cluster's Network Access settings.

3. Start the server:

   ```bash
   npm start
   ```

The server listens on the configured `PORT`, or port `5000` if none is set.

## API

### Create a short URL

`POST /url`

Request body:

```json
{
  "redirectUrl": "https://example.com"
}
```

Successful response (`201 Created`):

```json
{
  "shortId": "generated-id"
}
```

### Redirect to the original URL

`GET /url/:shortId`

Redirects to the original URL and records a visit. Returns `404` if the short ID does not exist.

### Get visit analytics

`GET /url/analytics/:shortId`

Successful response (`200 OK`):

```json
{
  "visitCount": 1
}
```

Returns `404` if the short ID does not exist.
