# Static website on Google Storage

## Deploy

- Create a `CNAME` record which points to `c.storage.googleapis.com` with your subdomain as host

``` bash
NAME                                             TYPE     DATA
<your-subdomain>.<your-awesome-domain>.com       CNAME    c.storage.googleapis.com.

```

- Create a multiregional bucket on Google Storage with the same name as your complete website url

``` bash
gsutil mb gs://<your-subdomain>.<your-awesome-domain>.com
```

- Copy files to storage

``` bash
gsutil rsync -R ./ gs://<your-subdomain>.<your-awesome-domain>.com
```

- Allow access

``` bash
gsutil acl ch -u AllUsers:R gs://<your-subdomain>.<your-awesome-domain>.com/index.html
```

- Set default page

``` bash
gsutil web set -m index.html gs://<your-subdomain>.<your-awesome-domain>.com
```
