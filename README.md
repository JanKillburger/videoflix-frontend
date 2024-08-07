# VideoflixFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Remarks on the frontend
The video play does not have controls to manually switch between resolutions/qualities. This is not included in the video.js library. There are video.js plugins which offer this functionality but I haven't figured out how they can be implemented in Angular.
But the browser will automatically select the quality level based on the available bandwidth.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
