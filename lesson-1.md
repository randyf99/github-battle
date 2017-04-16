## Why React? 
- Composition
- Unidirectional Dataflow
- Declarative
- Explicit Mutations
- Just JavaScript


## Composition
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
