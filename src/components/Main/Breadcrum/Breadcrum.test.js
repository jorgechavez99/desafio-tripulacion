import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';  

describe('Breadcrumb component', () => {
  test('renders without crashing', () => {
    render(<Breadcrumb />);
    expect(screen.getByText('The Bridge')).toBeInTheDocument();
  });
});