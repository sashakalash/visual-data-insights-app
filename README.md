# Dynamic Plot Dashboard (MVP)

## Overview

This is a minimal viable product (MVP) built in just 4 hours.  
Its primary goal is to dynamically display interactive plots using Plotly inside a Gridster layout.

This MVP lays the groundwork for a future, fully-featured data visualization platform.

---

## Features

- **Authentication**: Basic Auth service implemented
- **Charts**: Plotly integrated; mocked plots added
- **Grid Layout**: Uses Gridster for dynamic widget placement
- **State Management**: Store implemented for application state
- **UI Components**: Angular Material library integrated
- **Dynamic Components**: Infrastructure ready for dynamic loading of plot widgets

---

## Tech Stack

- Angular
- Plotly.js
- Angular Gridster
- Angular Material
- RxJS & State Management NgRx
- TypeScript

---

## Future Plans

- Connect real data sources
- Configurable widgets
- Enhanced auth and access control
- Save/load layout state
- Import/export dashboard configurations

---

## Getting Started

```bash
npm install
ng serve
```

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
