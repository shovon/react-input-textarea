import React from 'react';
import { Input, TextArea } from './';

React.render(
  <div>
    <Input
      style={{border: '1px solid red', outline: 'none'}}
      placeholder="Something" />
    <TextArea
      placeholder="Another" />
  </div>,
  document.getElementById('playground')
);
