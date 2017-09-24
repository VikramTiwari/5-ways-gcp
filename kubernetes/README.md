# Kubernetes / GKE

## requirements

- Helm

``` bash
brew install kubernetes-helm
```

## deploy

- Set up a containers cluster and get it's credentials

``` bash
gcloud container clusters create --num-nodes=2 --zone=us-central1-b cloud
gcloud container clusters get-credentials --zone=us-central1-b cloud
```

- Install MySQL using helm

``` bash
helm init
helm repo update
helm install stable/mysql
```

- Install kube-lego using helm

``` bash
helm install --set config.LEGO_EMAIL=vikramtheone1@gmail.com stable/kube-lego
```

- Deploy microservice Echoserver

``` bash
# Namespace
kubectl apply -f microservice/00-namespace.yaml
# Service (has to be Type=NodePort)
kubectl apply -f microservice/service.yaml
kubectl apply -f microservice/deployment.yaml
kubectl apply -f microservice/ingress.yaml
# check the IP and make a DNS record for the same
kubectl get ingress --namespace microservice echoserver
```

- See everything in action

``` bash
kubectl proxy
# Open localhost:8001/ui
```

## Cleanup

``` bash
# delete load balancer and static ips
gcloud container clusters delete --zone=us-central1-b cloud
```
