##Why React? 
- Composition
- Unidirectional Dataflow
- Declarative
- Explicit Mutations
- Just JavaScript


##Composition
- How do you build a large application? By building a bunch of small apps or components. You can use the same intuition you have about using functions in JS, to build components in React.

```
var getProfilePic = function(username) {
	return 'https://photo.fb.com/' + username;
};

var getProfileLink = function(username) {
	return 'https://www.fb.com/' + username;
};

var getAvatarInfo = function(username) {
	return {
		pic: getProfilePic(username),
		link: getProfileLink(username)
	}
};

getAvatarInfo('randyf');
```

~~~
var ProfilePic = function() {
	return (
		<img src={'https://photo.fb.com' + this.props.username } /> 
	)
}

var ProfileLink = function() {
	return (
		<a href={'https://www.fb.com/' + this.props.username'}>
		{this.props.username}
		</a>
	)
}

var Avatar = function() {
	return (
		<div>
			<ProfilePic username={this.props.username} />
			<ProfileLink username={this.props.username} />
		</div>
	)
}

<Avatar username='randyf' />
~~~


##Imperative vs. Declarative
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


##Unidirectional Dataflow
- All you need to worry about is managing state in your application and the UI will update accordingly.


##Explicit Mutations
- State updates largely by using setState. So state changes are explicit and clear.

##Just JavaScript
- React api is really small, as it relies on JS for most things. 
- One example is that in angular we use ng-repeat to create lists. In React we use .map.
