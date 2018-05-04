# Containerized Microservice Pipeline App

# Install Helm Client (helm)
1. Run ```brew install kubernetes-helm```

[Installation Details for Windows and Linux](https://docs.helm.sh/using_helm/#installing-helm)

# Install Helm Server (Tiller)
1. Run ```helm init```

    This will validate that helm is correctly installed on your local environment and the cluster ```kubectl``` is connected to.
2. Run ```kubectl get pods --namespace kube-system``` to validate tiller is running

```
NAME                                            READY     STATUS    RESTARTS   AGE
...
tiller-deploy-677436516-cq73w                   1/1       Running   0          21h
...
```

# Deploy App Helm Chart onto Cluster
1. Ensure Azure Container Registry Credentials are deployed onto your cluster
2. Install the helm chart
    ```
    helm install . -n <app-chart-name>
    ```
    **Note**: Use the relative path if you are running from the root directory.
    ```
    helm install /chart -n login-app
    ```
