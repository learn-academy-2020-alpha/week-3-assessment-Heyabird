// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.Declare userInput as a state with a value of an empty string
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.Make a function that takes in user input and saves it to state userInput
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Destructure userInput
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. when User types, this function is called automatically*/}
          onChange={ this.robot }
          {/* 5. the value saves what the User inputs */}
          value={ userInput }
        />

        <div>
          {/* 6. This is where the three robots will display on the page*/}
          <GoodRobot
            {/* 7. Save the prop value of userInput and send it to the Good Robot component*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.
      <div>
        <h3>Good Robot</h3>
        {/* 9. Write out what Good Robot will spit out using the userInput prop*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. export GoodRobot
export default GoodRobot
