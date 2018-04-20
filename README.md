# Containerized Microservices Pipeline

Containerized Microservices Pipeline app built on Angular

## Development Prerequisites
In order to develop/run this app, you will need to install the following:

### Install Docker

#### Install on Mac

[Docker CE](https://docs.docker.com/docker-for-mac/install/)

#### Install on Windows

[Docker CE](https://docs.docker.com/docker-for-windows/install/)

### Install Node

[Node v8 latest](https://nodejs.org/en/)

### Install Angular CLI

```npm install -g @angular/cli```

## Run the app in a container for development
- (Optional) Create the  image `docker build -t app .` .
- Run the image in a Docker container
    - For Windows use: `docker run -p 4200:4200 -p 49153:49153 --mount type=bind,source=%cd%,target=/usr/src/app --rm -it app`.
    - For MacOS use: `docker run -p 4200:4200 -p 49153:49153 --mount type=bind,source="${PWD}",target=/usr/src/app --rm -it app`.
- Browse to `http://localhost:4200`.

## Run app built for production in a container
- Run `ng build --prod`. This will create the `dist` folder.
- Create the image: `docker build -f Dockerfile-prod -t app .`
- Run the image in a Docker container: `docker run -p 80:80 --rm -it app`.
- Browse to `http://localhost`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contribute

1. Create a feature branch for your work.
2. Add and commit your work.
3. Push the changes to origin.
4. Create a pull request.

```
git checkout -b feature-branch-name
git commit -am "added feature"
git push -u origin feature-branch-name
```

### Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
