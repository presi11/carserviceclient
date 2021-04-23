# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development App

### car's service

Service that consults the API to get all the cars, cars by id, save cars and remove from the list.

### giphy's services

Service that obtain the gif to assign to a car.

### owner's services

Service that consults the API to get all the owners, owners by DNI, save owners and remove from the list.

### car-edit component

Was added two new methods, used to get the owners and provide the list to select a new owner.

### car-list component

This component was restructured to obtain the owners and the cars to list in the page and with the use of `giveName` and `searchOwner` to show the name of the owner instead of DNI

### owner-edit component

This component is responsible for manage the changes in the list of owners. Receives an id to select an especific owner to edit some feature or delete from the list. 

### list-owner component

This component is similar to `car-list component` because basically list all owners, in this case, this component allows to select and delete more than one owner simultaneously, for this was created one method to save the selected owners and another to remove that selected owners

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
