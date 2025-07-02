import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderBar from "./HeaderBar";

describe('validateName', () => {
    it('renders the Contact form', () => {
        render(
            <HeaderBar />
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
    });


});