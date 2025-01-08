import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"

// Test Case-1
it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/> 
        </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");

    const loginButton = screen.getByRole("button", {name: "Login"})

    expect(loginButton).toBeInTheDocument();
});

// Test Case-2
it("Should load Header Component with a Cart items 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/> 
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0)")

    expect(cartItems).toBeInTheDocument();
});

// Tesst Case-3
it("Should load Header Component with a Cart items ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/> 
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

// Test Case-4
it("Should change Login Button to Logout on clickl", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/> 
        </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
    
});
