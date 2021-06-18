import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";


export default function Navi() {
  return (
    <div>
      <Menu inverted={true} fixed={true}>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color='red'>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
