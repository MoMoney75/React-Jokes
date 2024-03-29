import React ,{Component} from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props){
    super(props)
    this.upVote = this.upVote.bind(this)
    this.downVoteVote = this.downVote.bind(this)
    this.toggleClock = this.toggleClock.bind(this)
  }

  upVote(){
    this.props.vote(this.props.id, +1)
  }

  downVoteVote(){
    this.props.vote(this.props.id, -1)
  }

  toggleClock(){
    this.props.toggleClock(this.props.id)
  }

  render(){

    return (
      <div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
        <div className="Joke-votearea">
          <button onClick={this.upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={this.downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          <button onClick={this.toggleLock}>
            <i
              className={`fas ${this.props.locked ? "fa-unlock" : "fa-lock"}`}
            />
          </button>

          {this.props.votes}
        </div>

        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
