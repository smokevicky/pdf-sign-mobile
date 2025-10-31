import { render, screen } from '@testing-library/react';
import { UploadPage } from './UploadPage';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { MemoryRouter } from 'react-router-dom';

describe('UploadPage', () => {
    it('renders upload page', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UploadPage />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/upload your document/i)).toBeInTheDocument();
    });
});
