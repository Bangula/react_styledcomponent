import React from "react";

// Styled Components
import { Header, Button, Input } from "./styledComnponents/Components";

const Test = () => {
  const [state, setState] = React.useState(false);
  return (
    <div>
      <Header state={state} onClick={() => setState(!state)}>
        Styled components testing
      </Header>
      <br />
      <Button background="red" sm>
        Click me!
      </Button>
      <Button md background="blue">
        Click me!
      </Button>
      <Button lg background="green">
        Click me!
      </Button>
      <Button xl background="pink">
        Click me!
      </Button>
      <br />
      <Button full xl>
        Click me!
      </Button>
      <br />
      <Input placeholder="Input field" />
      <Input placeholder="Input field" />
      <Input placeholder="Input field" />
      <Input placeholder="Input field" />
    </div>
  );
};

export default Test;
