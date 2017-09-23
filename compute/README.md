# Running on Google Compute Engine

## Deploy

- Create a compute engine instance and ssh into it

``` bash
gcloud compute instances create puppet --zone=us-central1-b --scopes=storage-rw --metadata=startup-script-url=https://raw.githubusercontent.com/VikramTiwari/5-ways-gcp/master/compute/scripts/init.sh
gcloud compute ssh puppet
```

- Clone the code and install node dependencies

``` bash
git clone https://github.com/VikramTiwari/5-ways-gcp.git app && cd app/compute/puppet/
yarn
```

- Start the script with pm2 and look at the logs

``` bash
pm2 start index.js
pm2 logs index
```

## Test

- Try getting the image from google storage

``` bash
gsutil cp gs://<your-subdomain>.<your-awesome-domain>.com/screenshot.png screenshot.png
```

## Cleanup

- After all is done, delete the instance

``` bash
gcloud compute instances delete puppet
```
