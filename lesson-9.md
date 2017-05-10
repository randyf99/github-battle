## Controlled components 

- Controlled components have functions to govern the data going into them on every onChange event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).

- Data displayed by a controlled component is received through props passed down from it's parent/container component.

- This is a one-way loop – from (1) child component input (2) to parent component state and (3) back down to the child component via props – is what is meant by unidirectional data flow in React.js application architecture.

# Continue building out Battle part of app
