'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _helpers = require('./helpers');

var BaseInput = (function (_React$Component) {
  function BaseInput(props) {
    _classCallCheck(this, BaseInput);

    _get(Object.getPrototypeOf(BaseInput.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: (0, _helpers.isStringEmpty)(props.initialValue) ? '' : props.initialValue
    };
  }

  _inherits(BaseInput, _React$Component);

  _createClass(BaseInput, [{
    key: '_onFocus',
    value: function _onFocus(event) {
      this._setSelectionIfNeeded(event.target);

      // TODO; check and see whether or not the caller to the `onFocus` callback
      //   expect any value.
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      var value = '';

      if ((0, _helpers.isStringEmpty)(this.state.value)) {
        value = event.target.value;

        var index = value.lastIndexOf(this.props.placeholder);

        if (index !== -1) {
          value = value.slice(0, index);
        }
      } else {
        value = event.target.value;
      }

      if (this.props.onChange) {
        this.props.onChange(event);
      }

      this.setState({ value: value });
    }
  }, {
    key: '_setSelectionIfNeeded',
    value: function _setSelectionIfNeeded(node) {
      if ((0, _helpers.isStringEmpty)(this.state.value)) {
        node.setSelectionRange(0, 0);
        return true;
      }

      return false;
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(event) {
      if ((0, _helpers.isStringEmpty)(this.state.value)) {
        this._setSelectionIfNeeded(event.target);
      }

      if (this.props.onSelect) {
        return this.props.onSelect(event);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._setSelectionIfNeeded(_react2['default'].findDOMNode(this.refs.textInput));
    }
  }, {
    key: '_mergeStyles',
    value: function _mergeStyles(style1, style2) {
      var stl1 = (0, _helpers.isArray)(style1) ? style1 : [style1];
      var stl2 = (0, _helpers.isArray)(style2) ? style2 : [style2];

      return stl1.concat(stl2).reduce(function (prev, next) {
        return (0, _objectAssign2['default'])({}, prev, next);
      });
    }
  }], [{
    key: 'DEFAULT_PLACEHOLDER_STYLE',
    value: { color: 'grey', fontWeight: 'bold' },
    enumerable: true
  }]);

  return BaseInput;
})(_react2['default'].Component);

var Input = (function (_BaseInput) {
  function Input() {
    _classCallCheck(this, Input);

    if (_BaseInput != null) {
      _BaseInput.apply(this, arguments);
    }
  }

  _inherits(Input, _BaseInput);

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var defaultPlaceHolderStyle = Input.DEFAULT_PLACEHOLDER_STYLE;

      var placeholderStyle = this._mergeStyles(this.props.style ? this.props.style : {}, this.props.placeholderStyle ? (0, _objectAssign2['default'])({}, defaultPlaceHolderStyle, this.props.placeholderStyle) : { color: '#a8a8a8' });

      return _react2['default'].createElement('input', {
        ref: 'textInput',
        type: 'text',
        style: !(0, _helpers.isStringEmpty)(this.state.value) ? this.props.style ? this.props.style : {} : placeholderStyle,
        value: (0, _helpers.isStringEmpty)(this.state.value) ? this.props.placeholder : this.state.value,
        onFocus: this._onFocus.bind(this),
        onBlur: this._onBlur.bind(this),
        onChange: this._onChange.bind(this),
        onSelect: this._onSelect.bind(this) });
    }
  }]);

  return Input;
})(BaseInput);

exports.Input = Input;

var TextArea = (function (_BaseInput2) {
  function TextArea() {
    _classCallCheck(this, TextArea);

    if (_BaseInput2 != null) {
      _BaseInput2.apply(this, arguments);
    }
  }

  _inherits(TextArea, _BaseInput2);

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var defaultPlaceHolderStyle = Input.DEFAULT_PLACEHOLDER_STYLE;

      var placeholderStyle = this._mergeStyles(this.props.style ? this.props.style : {}, this.props.placeholderStyle ? (0, _objectAssign2['default'])({}, defaultPlaceHolderStyle, this.props.placeholderStyle) : { color: '#a8a8a8' });

      return _react2['default'].createElement('textarea', {
        ref: 'textInput',
        type: 'text',
        style: !(0, _helpers.isStringEmpty)(this.state.value) ? this.props.style ? this.props.style : {} : placeholderStyle,
        value: (0, _helpers.isStringEmpty)(this.state.value) ? this.props.placeholder : this.state.value,
        onFocus: this._onFocus.bind(this),
        onBlur: this._onBlur.bind(this),
        onChange: this._onChange.bind(this),
        onSelect: this._onSelect.bind(this) });
    }
  }]);

  return TextArea;
})(BaseInput);

exports.TextArea = TextArea;

