# google-places-remote-schema

[Google Places API](https://developers.google.com/places/web-service/intro) is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.

## Adding Google Places as Remote Schema

- Get the Google Maps API Key by visting the Google Maps Platform page [https://developers.google.com/places/web-service/get-api-key](https://developers.google.com/places/web-service/get-api-key).
- Set the API key as `GOOGLE_MAPS_API_KEY` environment variable.
- This custom resolver is used to accept a location argument of type "Point" of Postgres and returns restaurants around a radius with rating and address details.
- Refer to API documentation for integration with other information like Photos, Reviews etc.

## Google Places API Documentation

[API Documentation](https://developers.google.com/places/web-service/intro).

## Deploy with Glitch

1. Click the following button to edit on glitch

   [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/graphql-engine/master/community/boilerplates/auth-webhooks/nodejs-express/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveenweb/google-places-remote-schema)

2. Add the following environment variables in the `.env` file on glitch.

   ```env
   GOOGLE_MAPS_API_KEY=xxx
   PORT=3000
   ```

## Running Locally

```bash
npm install
PORT=3000 GOOGLE_MAPS_API_KEY=xxx npm start
```
