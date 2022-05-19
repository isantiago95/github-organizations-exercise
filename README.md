# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the project

First run one of the following commands depending on your environment: `npm install` or
`yarn install` or `pnpm install` in order to install all the dependencies required.

### `npm dev` or `yarn dev` or `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build` or `yarn build` or `pnpm build`

Create a production build

## Information

This repo was created in order to fuillfill some requirements of an exercise. Maybe it's not perfect
but it works as expected.

### You can find an online version of this running under: [https://portfolio.israelsantiago.com/github-organizations/](https://portfolio.israelsantiago.com/github-organizations/)

## REQUIEMENTS:

- The web app should start on a page that displays a list of 10 GitHub Organizations
  - The list is sorted by name
  - The user is able to load additional list items (i.e. next page, lazy loading, load more button)
  - Each list item shows some basic info, like name, avatar, etc.
- When a user taps on an organization in the list, the web app navigates to a second page that
  displays more in-depth information about the Organization
  - The content should load again when the page is refreshed
- Written in JavaScript or TypeScript and implemented with React
- This exercise is meant to be broad. Consider code architecture, navigation, user experience, and
  visual components. Nothing is off limits.

## Libraries:

- `axios`: "^0.27.2",
- `immer`: "^9.0.14",
- `react-router-dom`: "^5.3.0",
- `reactstrap`: "^9.0.2",
- `use-immer`: "^0.7.0",
