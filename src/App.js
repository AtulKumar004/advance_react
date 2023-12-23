import logo from './logo.svg';
import './App.css';
import CurrentUserLoader from './component/Section3/currentUserLoader';
import UserInfo from './component/Section3/user-info';
import UserLoader from './component/Section3/userLoader';
import BookInfo from './component/Section3/book-info';
import ResourceLoader from './component/Section3/resourceLoader';

function App() {

  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <ResourceLoader  resourceName={"user"} resourceUrl={"/user/1"}>
      <UserInfo />
      </ResourceLoader>
      <ResourceLoader  resourceName={"book"} resourceUrl={"/books/1"}>
        <BookInfo />
      </ResourceLoader>
      <ResourceLoader  resourceName={"book"} resourceUrl={"/books/2"}>
        <BookInfo />
      </ResourceLoader>
      {/* <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}


    </>
  );
}

export default App;
