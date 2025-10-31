import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonBar } from './ButtonBar';

describe('ButtonBar', () => {
    it('renders both buttons', () => {
        render(
            <ButtonBar
                button1Props={{ text: 'Back', onClick: jest.fn() }}
                button2Props={{ text: 'Next', onClick: jest.fn() }}
            />
        );
        expect(screen.getByText('Back')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
    });

    it('calls onClick for both buttons', () => {
        const onClick1 = jest.fn();
        const onClick2 = jest.fn();
        render(
            <ButtonBar
                button1Props={{ text: 'Back', onClick: onClick1 }}
                button2Props={{ text: 'Next', onClick: onClick2 }}
            />
        );
        fireEvent.click(screen.getByText('Back'));
        fireEvent.click(screen.getByText('Next'));
        expect(onClick1).toHaveBeenCalled();
        expect(onClick2).toHaveBeenCalled();
    });
});
