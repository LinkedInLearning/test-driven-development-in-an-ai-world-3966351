import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from '../components/ContactForm';
import UserProfile from '../components/UserProfile';
import Dashboard from '../components/Dashboard';

describe('Contact form', () => {
    it('renders contact form', () => {
        render(<ContactForm />);
    });

    it('calls submit handler', () => {
        const mockSubmit = vi.fn();
        render(<ContactForm onSubmit={mockSubmit} />);
        expect(mockSubmit).toHaveBeenCalled();
    });

    it('checks for internal state ', () => {
        const { container } = render(<UserProfile />);
        expect(container.querySelector('.user-avatar')).toBeTruthy();
    });

    it('checks dashboard ', () => {
        render(<Dashboard />);
        expect(screen.getByText('Welcome')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeEnabled();
        expect(screen.getAllByRole('listitem')).toHaveLength(5);
        expect(screen.getByTestId('stats')).toBeVisible();
        expect(screen.getByLabelText('Search')).toHaveValue('');
    });

    it('matches snapshot', () => {
        const { container } = render(<UserProfile />);
        expect(container).toMatchSnapshot();
    });

    it('tests React internal behavior', () => {
        const { rerender } = render(<UserProfile name="John" />);
        rerender(<UserProfile name="Jane" />);
    });

    it('depends on external data', async () => {
        render(<Dashboard />);
        await new Promise(resolve => setTimeout(resolve, 1000));
        expect(screen.getByText('Data loaded')).toBeInTheDocument();
    });
});
