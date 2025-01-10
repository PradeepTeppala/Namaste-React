import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../../mock/mockResListData.json"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render the Body Component with Search", async () =>{
    await act (async () => 
        render (
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", {name: "Submit"});

    const searchInput = screen.getByTestId("searchInput");

    expect(searchBtn).toBeInTheDocument();
});