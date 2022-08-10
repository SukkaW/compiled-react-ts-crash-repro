import React from "react";
import { createRoot } from "react-dom/client";

interface Props extends React.PropsWithChildren<{}> {
  fallback: React.ReactNode;
}

// Any react class component can causes the crash
// In realworld application I am writing a custom error boundary component
// which has to be a react class component, not a functional component
export class App extends React.Component<Props, { error: null | Error }> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
