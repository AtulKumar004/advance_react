import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log("logErrorToMyService => " ,errorInfo )
    console.log("logErrorToMyService => error " ,error )
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "aquamarine",
            width: "100vw",
            height:"100vh"
          }}
        >
          <h1>Something went wrong</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
