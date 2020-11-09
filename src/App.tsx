import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import Text from "./components/Text";

interface AppProps {
  name: string;
}

function App({ name }: AppProps) {
  const [count, setCount] = useState(0);
  return <Text text="Hola" />;
}
export default hot(App);
