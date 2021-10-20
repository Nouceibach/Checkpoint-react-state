import './App.css';
import{Component} from 'react';
import { Profile } from './Components/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  // 2- state update
  toggel = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div>
          <h1>WS React state</h1>
          <button onClick={this.toggel}>Show Profile</button> 
            {this.state.show ?<Profile/> : null}
        
      </div>
    );
  }
}




