 // React components need to be capitalized
 // always need some "root" HTML that wraps all the other HTML
 const HelloWorld = () => {
    return (
      <div>
        Hello World
      </div>
    );
  };

  // ReactDOM is imported by the client (example1.handlebars)
// render out the JSX tag <HelloWorld />, and put it in the #app divs
const init = () => {
  ReactDOM.render(<HelloWorld />, document.querySelector("#app"));
};

window.onload = init;