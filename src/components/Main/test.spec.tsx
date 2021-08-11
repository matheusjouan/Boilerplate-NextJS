import { render, screen } from '@testing-library/react';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main title="" description="" />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main title="" description="" />);

    expect(container.firstChild).toHaveStyle({ background: '#06092b' });
  });
});
