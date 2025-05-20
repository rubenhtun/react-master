const MyContext = React.createContext("Hello React");
class App extends React.Component {
  render() {
    return <Header />;
  }
}
class Header extends React.Component {
  render() {
    return <Title />;
  }
}
class Title extends React.Component {
  static contextType = MyContext;
  render() {
    return <h1>{this.context}</h1>;
  }
}
