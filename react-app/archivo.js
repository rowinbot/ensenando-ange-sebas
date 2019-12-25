function Contador() {
  var contador = React.useState(0);
  var h = React.createElement;

  return h("div", {}, [
    h("button", { onClick: () => contador[1](contador[0] - 1) }, "Reducir"),
    h("h1", {}, contador[0]),
    h("button", { onClick: () => contador[1](contador[0] + 1) }, "Aumentar")
  ]);
}

window.onload = function() {
  ReactDOM.render(
    React.createElement(Contador),
    document.getElementById("app")
  );
};
