### Environment Setup

- Follow the [React Native Guide](https://reactnative.dev/docs/getting-started.html) for getting started building a project with native code.
- Clone or download the repo
- `yarn` to install dependencies
- `react-native start` to start the packager
- IOS: `react-native run-ios`, Android: `react-native run-android`

#### Directory layout

- `src` : main container
  - `assets` : assets and colors.
  - `components` : application components.
  - `services` : application services, e.g. API clients
  - `utils` : utilities.
  - `views` : should be a component folder with PascalCase convention, let say you want to create `Additional Question screen` so its folder should like `AdditionalQuestion` with `index.js` and `style.js` inside it. the last but not least, for state manajement you store inside the screen folder you just created.

### How to contribute

- Please do create a branch from `develop` if you work on an issue

NB: Install [prettier](https://prettier.io/docs/en/editors.html) and [eslint](https://eslint.org/docs/user-guide/integrations#editors) in your text-editor
