## Imperative vs. Declarative
```
// Imperative (How)
var numbers = [4,2,3,6];
var total = 0;
for (let i = 0; i < numbers.length; i++) {
	total += numbers[i];
}

// Declarative (What)
var numbers = [4,2,3,6];
numbers.reduce(function(previous, current) {
	return previous + current;
});
```


## Unidirectional Dataflow
- All you need to worry about is managing state in your application and the UI will update accordingly.


## Explicit Mutations
- State updates largely by using setState. So state changes are explicit and clear.

## Just JavaScript
- React api is really small, as it relies on JS for most things. 
- One example is that in angular we use ng-repeat to create lists. In React we use .map.

## Tooling

- Webpack
	+ Why does this thing exist?
	+ What problem is thing solving?

# Webpack needs:
- Webpack needs to know the starting point of your application, or your root JavaScript file.

- Webpack needs to know which transformations to make on your code.

- Webpack needs to know to which location it should save the new transformed code.

# Babel

# React Components
- Components are the building blocks of React. 
- Similar to Directives in Angular
- Widgets or modules in other libraries, frameworks or languages.
- You can think of a component as a collection of HTML, CSS, JS, and some internal data specific to that component.
- What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself.

## Building a Hello World React component
# NPM Install
- Create github-battle directory
- npm init -y
- git init
- .gitignore
- npm install --save react react-dom 
- npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
- Explain React.createElement vs JSX
- Make sure to explain webpack work-flow, use of webpack dev server, and webpack -p
- create webpack.config.js
- babel preset set-up in package.json
- create first component in index.js
