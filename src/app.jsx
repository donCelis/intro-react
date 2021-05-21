import { useState } from "react";
import Container from "./components/container";
import Articles from "./components/articles";
import LoginForm from "./components/login";

const App = () => {
  const [session, setSession] = useState(false);

  return (
    <Container classProp={"py-4"}>
      {session ? (
        <Articles setState={setSession} />
      ) : (
        <LoginForm setState={setSession} />
      )}
    </Container>
  );
};

export default App;
