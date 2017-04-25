## This keyword review
- Implicit Binding (left of the dot at call time)
- Explicit Binding
- new Binding
- window Binding

# Where is this function invoked?

# Implicit Binding

```
var me = {
	name: 'Randy',
	age: 135,
	sayName: function() {
		console.log(this.name);
	}
};

me.sayName() // left of the dot, so context is me

var sayNameMixin = function(obj) {
	obj.sayName = function() {
		console.log(this.name);
	}
};

var me2 = {
	name: 'Randy',
	age: 135
};

var you = {
	name: 'Nash',
	age: 28
};

sayNameMixin(me2);
sayNameMixin(you);

me.sayName();
you.sayName(); // These each generate a different result based again on the "left of the dot context".
```

# Explicit Binding

```
var sayName = function(lang1, lang2, lang3) {
		console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3 + '.');
}

var stacey = {
	name: 'Stacey',
	age: 34
};

var languages = ['JavaScript', 'Ruby', 'Python'];
// Want to call function in the context of Stacey
sayName.call(stacey, languages[0], languages[1], languages[2]);

sayName.apply(stacey, languages);

var newFunc = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('Invoke it later');
newFunc();
```

# new Binding
 - When new is invoked, an object is created and that is what this refers to.


# window Binding
- If no binding is implied, or explicit, then the context defaults to the window object. This won't work in strict mode, and that's a good thing.

## On to building app