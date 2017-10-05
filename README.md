# AssignmentKLM

# Problem Statement:  Create an Angular find-trip component containing a simple form like the design. 

# Expected:
- Use Angular 2 (preferably) with TypeScript.
- You can use Angular-CLI to bootstrap / scaffold the application.
- Create a component with this form.
- The form should be reactive (not template driven).
- Include form validation, according to:
Booking Code rules:
 •	Max-Length: 6, Min-Length: 5
 •	Valid numbers: 2-9
 •	Alphabet: all
Family Name rules:
 •	Min-Length: 2, Max-Length: 30
 •	Only Alphabets.

- 100% test coverage.
- Styling (please see the screen shots below).
- Responsive.
- Fully accessible.
- Retrieve actual (mocked) trip data.

For Screen shots please refer Front-end-case.docx

## Development Approach

The approach behind this application is, we need to have three pages one for entering the booking code, another one to have it's details and last one if booking code not found. So I have created the three components one for entering details, one for showing details and one for notfound. The routes have been created for them. Once details has been entered and submitted then, we show booking details on the detail page. if details not correct then not found page comes up.


## Project Setup

After taking code from git, from the project root folder Run 'npm install'.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

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
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
