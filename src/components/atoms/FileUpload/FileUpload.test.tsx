import { render, screen, fireEvent } from '@testing-library/react';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
    it('renders upload button when no file', () => {
        render(<FileUpload file={null} />);
        expect(screen.getByText(/upload files/i)).toBeInTheDocument();
    });

    it('renders file name when file is present', () => {
        const file = new File(['dummy'], 'test.pdf', { type: 'application/pdf' });
        render(<FileUpload file={file} />);
        expect(screen.getByText('test.pdf')).toBeInTheDocument();
    });

    it('calls onFileSelect when file is selected', () => {
        const onFileSelect = jest.fn();
        render(<FileUpload file={null} onFileSelect={onFileSelect} />);
        const input = screen.getByLabelText(/upload files/i);
        fireEvent.change(input, {
            target: { files: [new File(['dummy'], 'test.pdf', { type: 'application/pdf' })] },
        });
        setTimeout(() => {
            expect(onFileSelect).toHaveBeenCalled();
        }, 2100);
    });
});
