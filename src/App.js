import {Component} from 'react'

class App extends Component {
  state = {
    Person: {
      fullName: "Houssem Hosni",
      bio: "I am a full-stack Web Application Developer, currently living in....",
      imgSrc: "/hoss.jpg",
      profession: "Web developer"
    },
    show: false,
    timer: 0
  };

  componentDidMount(){
    setInterval(() => {
      this.setState({
        ...this.state,
        timer: this.state.timer + 1
      });
    }, 1000);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App" style={{minHeight:700,backgroundColor:"ButtonHighlight",padding:20,textAlign:"center"}}>
        {this.state.show && (
          <>
            <h1>My name is : {this.state.Person.fullName}</h1>
            <h1>My BIO : {this.state.Person.bio}</h1>
            <h1>My profession : {this.state.Person.profession}</h1>
            <h1>My image : </h1><img src={this.state.Person.imgSrc} alt="profileImage" style={{width:350,height:350}}></img><br/>
          </>
        )}

        <button onClick={this.handleShowPerson}style={{letterSpacing:2,border:"solid",borderRadius:"20%",padding:6,textDecoration:"none"}}>Click me</button>
        <h1 id="time">Time since the component has mounted : {this.state.timer} Secondes</h1>
      </div>
    );
  }
}

export default App;