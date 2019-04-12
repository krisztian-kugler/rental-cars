# Rental Cars

You can access the deployed app [here.](https://krisztian-kugler.github.io/rental-cars)

## Used technologies

- Angular
- TypeScript
- RxJS
- Pug (for shorter template syntax)
- Sass (mainly for its nesting capability)

## Notes

- App should look consistent across all modern browsers (Chrome, Firefox, Edge, IE11).
- App is desktop-first but it's responsible (though for such a small project it's not that spectacular).
- I wrote a few unit and integration tests to check if the input field works as intended.
- Extra feature: a load spinner is displayed when data is being fetched from the API.
- Extra feature: search string gets highlighted in results.
- Extra feature: all search queries and related results are cached to prevent unnecessary calls to the API.
- Extra feature: debouncer on the input field that adds a 500ms delay after the last keystroke before the API gets called. This further reduces unnecessary calls if the user starts typing quickly.

## About displaying the results

It looked a bit weird to display raw response data in the dropdown list, so I decided to give it a little formatting. However without an API documentation, I wasn't entirely sure what type of data I get back from the backend, so I made several requests to see if I can figure it out. Based on that, I assume all response items have a 'name' property and at least one of the following: 'city', 'country', 'region'. I set up my data structure accordingly and displayed these in the dropdown.

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
