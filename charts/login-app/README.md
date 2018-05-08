# Containerized Microservice Pipeline App

Deploy this service to Kubernetes using [Helm](https://helm.sh/).

## Install Helm Client (helm)

[Installation Details for Windows and Linux](https://docs.helm.sh/using_helm/#installing-helm)

## Install Helm Server (Tiller)

1. Run ```helm init --upgrade```

    This will validate that helm is correctly installed on your local environment and the cluster ```kubectl``` is connected to.
2. Run ```kubectl get pods --namespace kube-system``` to validate tiller is running

```bash
NAME                                            READY     STATUS    RESTARTS   AGE
...
tiller-deploy-677436516-cq73w                   1/1       Running   0          21h
...
```

## Update Helm Values

Certain values must be manually added to the [values.yaml](values.yaml) file so that helm can deploy the deployment and service properly. The steps to obtain these values are shown below.

## App-specific values

These values should be changed in the ```app``` section:

- **app.image.repository**
- **app.image.imageName**
- **app.image.tag**
- **app.imagePullSecrets**

## Deploy Helm Chart onto Cluster

- Ensure Azure Container Registry Credentials are deployed onto your cluster as a Kubernetes secret with the same name that you set for ```app.imagePullSecrets``` in [values.yaml](values.yaml).

  - [Deploy container registry Kubernetes secret](https://kubernetes-v1-4.github.io/docs/user-guide/kubectl/kubectl_create_secret_docker-registry/)

- Install the helm chart

    ```bash
    helm install . -n login-app
    ```
    **Note**: Use the relative path if you are running from the root directory.

    ```bash
    helm install /charts/login-app -n login-app
    ```
