import { render } from '@testing-library/react';

import { ReactList } from './react-list';

describe('ReactList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactList />);
    expect(baseElement).toBeTruthy();
  });
});
