'use strict';

// From React site
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


// Below is from Coding Dojo
const myButton = React.createElement('button', null, "I don't do anything");
// console.log(JSON.stringify(myButton));
/*
  Prints the following:
  {
  "type":"button",
  "key":null,
  "ref":null,
  "props": {
  "children":"Click Me!"
  },
  "_owner":null,
  "_store":{}
  }
*/
ReactDOM.render(myButton, document.getElementById('btnDojo'));


// My attempt to understand this
function currentTime() {
  var t = setTimeout(function(){ currentTime() }, 1000);
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM";
  document.getElementById("clock").innerHTML = "Current time: " + hour + " : " + min + " : " + sec + " " + midday;
  var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(hour) {
  if (hour < 10) {
    return "0" + hour;
  }
  else {
    return hour;
  }
}
currentTime();
// above is Vanilla JS


// Solution from Coding Dojo
function update_time(){
  const element = React.createElement("h2", null, `The Time is: ${new Date().toLocaleTimeString()}`);
  ReactDOM.render(element, document.getElementById("react-time"));
}
setInterval(func => {
  1000,
  update_time()   
});