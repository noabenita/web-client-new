import logo from './logo.svg';
import './App.css';



class App extends Component {
  container = React.createRef();
  state = {
  open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
}

export default App;
