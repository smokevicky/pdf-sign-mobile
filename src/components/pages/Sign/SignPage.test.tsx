
import { render, screen } from '@testing-library/react';
import { SignPage } from './SignPage';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { MemoryRouter } from 'react-router-dom';

describe('SignPage', () => {
    it('renders signing message', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SignPage />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/signing your document/i)).toBeInTheDocument();
    });
});
