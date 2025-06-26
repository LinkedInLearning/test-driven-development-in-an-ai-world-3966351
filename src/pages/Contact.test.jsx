import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";

describe('validateName', () => {
    it('renders the Contact form', () => {
        render(<Contact/>);
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
 
    it('shows submit button', ()=>{
        render(<Contact/>);
        expect(screen.getByText("Submit")).toBeInTheDocument()
    })

    it('shows Reset button', () => {
        render(<Contact />);
        expect(screen.getByText("Reset")).toBeInTheDocument();
    });
 
});