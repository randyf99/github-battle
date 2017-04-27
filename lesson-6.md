## Stateless Functional Components
- Continue project

## Private Components in React
```
// Say we have the following:
var React = require('react');

function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => {
        return (
          <li key={friend}>{friend}</li>
        )
      })}
    </ul>
  )
}

module.exports = FriendsList

// We can make another stateless functional component to handle each friend...
var React = require('react');

function FriendItem (props) {
  return <li>{props.friend}</li>
}

function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => <FriendItem friend={friend} key={friend} />)}
    </ul>
  )
}

module.exports = FriendsList
// FriendItem is a "private component to FriendsList". This is a good habit to have...Take pieces and abstract them to new components. This makes our code more modular.
```
