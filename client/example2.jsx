// Note that React events (like `onChange` below) are camel-cased
const HelloUser = (props) => {
    return (
      <div>
        Hello {props.username}
        <p>Change Name:</p>
        <input type="text" value={props.username} onChange={handleNameChange} />
      </div>
    );
  };
  
  // re-render <HelloUser> every time the 
  const handleNameChange = (e) => {
    ReactDOM.render(
      <HelloUser username={e.target.value} />,
      document.querySelector("#app")
    );
  };
  
  const init = () => {
    ReactDOM.render(
      <HelloUser username='Ace Coder' />,
      document.querySelector("#app")
    );
  };
  
  window.onload = init;