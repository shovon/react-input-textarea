# Stylable React Input and Text Area

Have your React input and text area be styled, right down to the placeholder. Have them be styled inlined, without any external CSS.

## Usage

Install `react-input-textarea` using npm:

```javascript
npm install react-input-textarea
```

Then use it in your code like so:

```javascript
var Input = require('react-input-textarea').Input;
var TextArea = require('react-input-textarea').TextArea;

var MyComponent = React.createClass({
  render: function () {
    return (
      <div>
        <Input />
        <TextArea />
      </div>
    );
  }
});
```

## License

This is a fork of [`react-input-placeholder`](https://github.com/enigma-io/react-input-placeholder). `react-input-textarea` is [MIT Licensed](https://github.com/shovon/react-input-textarea/blob/master/LICENSE), and all copyrights belong to Enigma Technologies, Inc.