import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Store from './Store';


test('renders learn react link', () => {
  const { getByText } = render(<App store={Store}/>);
});
