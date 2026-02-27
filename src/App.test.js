// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FramerAether title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FramerAether/i);
    expect(titleElement).toBeInTheDocument();
});
