## Reduce
```
var scores = [89, 76, 47, 95]
  var initialValue = 0
  var reducer = function (accumulator, item) {
    return accumulator + item
  }
  var total = scores.reduce(reducer, initialValue)
  var average = total / scores.length
```
- You can do more than just accumulate numbers. You can create an object from an array for example. Just pass as an initial value an object, and add properties to it as you go along.
```
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var initialValue = {}
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducer, initialValue) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}
```

## Continue building app.
- Introduce Axios, Promises, Github API
- This lesson is all about the Github API and the functions around it.