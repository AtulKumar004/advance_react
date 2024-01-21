import logo from "./logo.svg";
import "./App.css";
import CurrentUserLoader from "./component/Section3/currentUserLoader";
import UserInfo from "./component/Section3/user-info";
import UserLoader from "./component/Section3/userLoader";
import BookInfo from "./component/Section3/book-info";
import ResourceLoader from "./component/Section3/resourceLoader";
import logProps from "./component/section5_HOC/lopProps";
import HOC from "./component/section5_HOC";
import { ErrorBoundary } from "./component/errorBoundry";

function App() {
  return (
    <ErrorBoundary>
      <HOC />
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}
    </ErrorBoundary>
  );
}

export default App;
