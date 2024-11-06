import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock

describe('<PostCard/>', () => {
  it('should render PostCard correctly', async () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i }))
      .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  })
});