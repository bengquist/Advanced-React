import { Container } from "next/app";
import Page from "../components/Page";

function MyApp(props) {
  const { Component } = props;

  return (
    <Container>
      <Page>
        <Component />
      </Page>
    </Container>
  );
}

export default MyApp;
