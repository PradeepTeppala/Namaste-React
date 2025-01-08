import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import  "@testing-library/jest-dom"

// Test Case-1
test("Should Load Contact Us Component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
})

// Test Case -2
it("Should load button inside Contact Component", ()=>{
    render(<Contact/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

//Test Case-3
it("Should load input name inside Contact component", ()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("Name")

    expect(inputName).toBeInTheDocument();
})

//Test Case-4
it("Should load 2 input boxes on the Contact Component", () =>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})