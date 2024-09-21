import { render } from '@testing-library/react';

import RosyUiReact from './rosy-ui-react';

describe('RosyUiReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RosyUiReact />);
    expect(baseElement).toBeTruthy();
  });
});
