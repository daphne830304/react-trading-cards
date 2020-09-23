"use strict";

function Homepage() {
  return (
    <div>
      <h1>Welcome to our home page!</h1>
      <a href="/cards"></a> 
      <img src = "/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
