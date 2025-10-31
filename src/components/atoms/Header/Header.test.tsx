import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    it('renders app bar and title', () => {
        render(<Header />);
        expect(screen.getByText(/pdf sign app/i)).toBeInTheDocument();
    });

    it('renders avatar', () => {
        render(<Header />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
