import React from 'react';
import { Input, TextArea } from './';

React.render(
  <div>
    <Input placeholder="Something" />
    <TextArea placeholder="Another" />
  </div>,
  document.getElementById('playground')
);
