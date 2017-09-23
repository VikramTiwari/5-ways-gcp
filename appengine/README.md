# App Engine Standard Flask Hello World

This sample shows how to use [Flask](http://flask.pocoo.org/) with Google App Engine Standard.

## Setting up

Before running or deploying this application, install the dependencies using [pip](http://pip.readthedocs.io/en/stable/):

``` bash
pip install -t lib -r requirements.txt
```

## Running locally

``` bash
dev_appserver.py app.yaml
```

## Deploy

``` bash
gcloud app deploy --project your-app-id -v your-version app.yaml
```
