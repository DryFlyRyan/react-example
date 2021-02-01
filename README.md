# Github Repository Search

## Introduction

I had built a similar project a few months back and for this code test
wanted to revisit it in order to build it with the goal of managing less
state within the app itself.

Instead I chose to rely more on native browser capabilities (accessed
through React Router), which would give the application better handling
around user navigation in addition to removing some of the cognitive
overhead around state management for the developer.

I decided to use a few things that I made for the other project because I
thought they were neat, such as the search bar, which mimics the current
GitHub search bar, as well as the language color matcher used for the right tab on the result cards. If I'd spun those up from scratch, the project would've likely been pushed beyond the 3 hour limit.

## Possible Approach Drawbacks

One of the "consequences" of a more browser-centric approach to state management was that the standard React hooks were usually not sufficient,
so this project uses a handful of custom hooks instead.

With the addition of custom hooks as well as reliance on React Router hooks and browser state, testing the application became a trickier and more verbose endeavor.

That said, I feel like this approach is much more robust and less prone to
the pitfalls around edge cases than standard React or even Redux state
management.

## Using the application

I bootstrapped the project using Create React App (it had been a minute and I was curious about some of the changes). This means that the standard scripts are available. From their docs:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: I had no reason to test the application outside of dev-mode, so if you want to break the app this is probably your best bet**
