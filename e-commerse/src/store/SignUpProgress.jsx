import { createContext, useState } from "react";

const SignUpProgressContext = createContext({
  progress: "",
  showSignUp: () => {},
  hideSignUp: () => {},
  showLogIn: () => {},
  hideLogIn: () => {},
});

export function SignUpProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showSignUp() {
    setUserProgress("signup");
  }

  function hideSignUp() {
    setUserProgress("");
  }

  function showLogIn() {
    setUserProgress("login");
  }
  function hideLogIn() {
    setUserProgress("");
  }

  const userProviderCtx = {
    progress: userProgress,
    showSignUp,
    hideSignUp,
    showLogIn,
    hideLogIn,
  };

  return (
    <SignUpProgressContext.Provider value={userProviderCtx}>
      {children}
    </SignUpProgressContext.Provider>
  );
}

export default SignUpProgressContext;
