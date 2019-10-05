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
    │       └── ShoppingCart      # Show cart items (qty, product name, price and total)
    │   ├── pages                 # this directory is used to differentiate code based on page url
    │       ├── Main              # page: Main page
    │           ├── components    # this compoenent directory is used only for specific page
    │           ├── services      # this services directory is used only for specific page
    │           ├── styles        # this styles directory is used only for specific page
    │           ├── test          # this test directory is used only for specific page
    │           └── index.jsx     # index file for main page
    │   ├── redux                 # this directory is used to put actions & reducers
    │       ├── actions           # cart actions (addToCart, addQty, removeQty, removeItem)
    │       └── reducers          # cart reducers
    │   ├── services              # directory hold global services (eg: http method, axios, etc)
    │   ├── index.js              # react app entry point
    │   ├── store.js              # redux store
    │   └── ...
    └── ...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I try implementing react hooks api and using functional component instead of class component for clearer syntax, less line code, smaller file zise afer bundling also it is easier to share stateful logic between component. As you can see at ./src, there is components directory so all global components goes here; `<ProductCardComponent/>` to dislplay product tuple & `<ShoppingCartComponent/>` to display cart information.

Then ./src/pages will store codes based on page url (eg: /main, /cart, /checkout, etc). Inside page component directory, there are components, services, styles, test, index that specificaly used by its page. ./src/redux to store actions and reducer so we can maintain event or middleware on that directory. Redux as state management use single soure of truth placed on ./src/store.js and for now only cart data used.

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

Gery Wibowo <br/>
akun.gery@gmail.com
