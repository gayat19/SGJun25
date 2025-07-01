import { TextEncoder, TextDecoder } from "util";

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

import { MemoryRouter } from "react-router-dom";
import { useAuth } from "../../Contextx/AuthContext";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import  "@testing-library/jest-dom"



const mockNavigate = jest.fn();

jest.mock("../../Contextx/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("../../Services/User.Service", () => ({
  lologinApiCall: jest.fn(),
}));

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ state: undefined }),
  };
});

describe("Login Component", () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
    });
    mockNavigate.mockReset();
  });

  it("renders input and button", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("calls login on button click",async()=>{
     render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const usernameInput = screen.getByLabelText(/un/i);
    const passwordInput = screen.getByLabelText(/pass/i);
    console.log(usernameInput)
    const loginButton = screen.getByRole("button", { name: /login/i })

    fireEvent.change(usernameInput,{target:{value:"testuser"}})
    fireEvent.change(passwordInput,{target:{value:"password123"}})
    fireEvent.click(loginButton);

    await waitFor(()=>{
      expect(mockLogin).toHaveBeenCalledWith({
        username:"testuser",
        password:"password123"
      });
    })
  })

  
});
