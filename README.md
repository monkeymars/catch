# List Product Page

![alt text](https://i.imgur.com/cel44xK.png)

# App Structure

    .
    ├── public                    # public directory
    │   ├── index.html            # index.html wrapper
    │   └── ...
    ├── src
    │   ├── components            # components that can be used globaly
    │       ├── ProductCard       # Card for product tuple
    │       └── ShoppingCart      # Show cart items (Qty, product name, price and total)
    │   ├── pages                 # this directory is used to differentiate code based on page url
    │       ├── Catalog           # page: catalog
    │           ├── components    # this compoenent directory is used only for specific pages
    │           ├── services      # this services directory is used only for specific pages
    │           ├── styles        # this styles directory is used only for specific pages
    │           ├── test          # this test directory is used only for specific pages
    │           └── index.jsx     # index file for catalog pages
    │   ├── redux                 # this directory is used to put actions & reducers
    │       ├── actions           # cart actions (addToCart, addQty, removeQty, removeItem)
    │       └── reducers          # cart reducers
    │   ├── services              # directory hold services (http, axios, etc)
    │   ├── index.js              # react app entry point
    │   ├── store.js              # redux store
    │   └── ...
    └── ...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
