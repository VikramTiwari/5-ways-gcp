# Cloud Functions - Geo from IP service

## Deploy

``` bash
# Edit following in the package.json for deploy script
# gcloud alpha functions deploy geofromip --stage-bucket <your_staging_bucket> --trigger-http
yarn run deploy
```

## Test

``` bash
# Edit following in the package.json for test script
# curl -X GET https://us-central1-<your_staging_bucket>.cloudfunctions.net/geofromip
yarn run test
```

## Usage

``` bash
curl -X GET "https://us-central1-happydemogods.cloudfunctions.net/geofromip"
```
