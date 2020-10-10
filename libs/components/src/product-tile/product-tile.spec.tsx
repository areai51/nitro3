import React from 'react';
import { render } from '@testing-library/react';

import ProductTile from './product-tile';

describe('ProductTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductTile />);
    expect(baseElement).toBeTruthy();
  });
});
