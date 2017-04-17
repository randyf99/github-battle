## Building UI's with pure function | Function Composition in React
 - Explain f(d)=V A function takes in some data, and returns a view.
 - Review pure functions 
 	- Pure functions always return the same result given the same arguments. 
 	- Pure function's execution doesn't depend on the state of the application.
 	- Pure functions don't modify the variables outside of their scope.

# Why is this important for React? Well the main reason is React's render method needs to be a pure function and because it's a pure function, all of the benefits of pure functions now apply to your UI as well. Another reason is that it's a good idea to get used to making your functions pure and pushing "side effects" to the boundaries of your program. I'll say this throughout the course, React will make you a better developer if you learn React the right way. Learning to write pure functions is the first step on that journey.

## Introduce PropTypes
 - As of 15.5 PropTypes must be downloaded from npm as prop-types
