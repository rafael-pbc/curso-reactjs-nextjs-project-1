import { render, screen, fireEvent } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import { jest } from '@jest/globals';
import { Button } from '.'

describe('<Button/>', () => {
  it('should render the button with the text', () => {
    render(<Button text="Load more" />);

    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {

    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i })

    //userEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeDisabled();
  });

  it('should be enable when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});