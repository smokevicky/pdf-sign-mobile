
import { render, screen } from '@testing-library/react';
import { SuccessPage } from './SuccessPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import fileReducer from '../../../store/fileSlice';

const mockFile = new File(['dummy'], 'signed.pdf', { type: 'application/pdf' });

const store = configureStore({
    reducer: { file: fileReducer },
    preloadedState: { file: { file: mockFile } },
});

beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => 'mock-url');
});

describe('SuccessPage', () => {
    it('renders success page', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SuccessPage />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/sign another/i)).toBeInTheDocument();
        expect(screen.getByText(/download/i)).toBeInTheDocument();
    });
});
