import React from 'react';
import assign from 'object-assign';
import { isStringEmpty, isArray } from './helpers';

class BaseInput extends React.Component {

  static DEFAULT_PLACEHOLDER_STYLE = { color: 'grey', fontWeight: 'bold' }

  constructor(props) {
    super(props);
    this.state = {
      value: isStringEmpty(props.initialValue) ? '' : props.initialValue
    }
  }

  _onFocus(event) {
    this._setSelectionIfNeeded(event.target);

    // TODO; check and see whether or not the caller to the `onFocus` callback
    //   expect any value.
    if (this.props.onFocus) { this.props.onFocus(event); }
  }

  _onBlur(event) {
    if (this.props.onBlur) { this.props.onBlur(event); }
  }

  _onChange(event) {
    let value = '';

    if (isStringEmpty(this.state.value)) {
      value = event.target.value;

      let index = value.lastIndexOf(this.props.placeholder);

      if (index !== -1) {
        value = value.slice(0, index);
      }
    } else {
      value = event.target.value;
    }

    if (this.props.onChange) { this.props.onChange(event); }

    this.setState({ value });
  }

  _setSelectionIfNeeded(node) {
    if (isStringEmpty(this.state.value)) {
      node.setSelectionRange(0, 0);
      return true;
    }

    return false;
  }

  _onSelect(event) {
    if (isStringEmpty(this.state.value)) {
      this._setSelectionIfNeeded(event.target);
    }

    if (this.props.onSelect) {
      return this.props.onSelect(event);
    }
  }

  componentDidUpdate() {
    this._setSelectionIfNeeded(React.findDOMNode(this.refs.textInput));
  }

  _mergeStyles(style1, style2) {
    let stl1 = isArray(style1) ? style1 : [style1];
    let stl2 = isArray(style2) ? style2 : [style2];

    return stl1.concat(stl2).reduce((prev, next) => assign({}, prev, next));
  }

}

export class Input extends BaseInput {
  render() {
    const defaultPlaceHolderStyle = Input.DEFAULT_PLACEHOLDER_STYLE;

    const placeholderStyle = this._mergeStyles(
      (this.props.style ? this.props.style : {}),
      this.props.placeholderStyle ?
        assign(
          {},
          defaultPlaceHolderStyle,
          this.props.placeholderStyle
        ) : { color: '#a8a8a8' }
    );

    return (
      <input
        ref="textInput"
        type='text'
        style={
          !isStringEmpty(this.state.value) ?
            (this.props.style ? this.props.style : {}) : placeholderStyle
        }
        value={
          isStringEmpty(this.state.value) ?
            this.props.placeholder : this.state.value
        }
        onFocus={this::this._onFocus}
        onBlur={this::this._onBlur}
        onChange={this::this._onChange}
        onSelect={this::this._onSelect} />
    );
  }
}

export class TextArea extends BaseInput {
  render() {
    const defaultPlaceHolderStyle = Input.DEFAULT_PLACEHOLDER_STYLE;

    const placeholderStyle = this._mergeStyles(
      (this.props.style ? this.props.style : {}),
      this.props.placeholderStyle ?
        assign(
          {},
          defaultPlaceHolderStyle,
          this.props.placeholderStyle
        ) : { color: '#a8a8a8' }
    );

    return (
      <textarea
        ref="textInput"
        type='text'
        style={
          !isStringEmpty(this.state.value) ?
            (this.props.style ? this.props.style : {}) : placeholderStyle
        }
        value={
          isStringEmpty(this.state.value) ?
            this.props.placeholder : this.state.value
        }
        onFocus={this::this._onFocus}
        onBlur={this::this._onBlur}
        onChange={this::this._onChange}
        onSelect={this::this._onSelect} />
    );
  }
}