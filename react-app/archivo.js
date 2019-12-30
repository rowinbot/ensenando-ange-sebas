function Contador({ reset = "Reseteo", id }) {
  // [0, ()  => {}]
  var [valor, cambiarValor] = React.useState(0);
  var h = React.createElement;

  return h("div", { className: "contenedor", id: id }, [
    h("button", { onClick: () => cambiarValor(valor - 1) }, "Reducir"),
    h("div", { className: "centro" }, [
      h("h1", {}, valor),
      h("button", { id: "reset", onClick: () => cambiarValor(0) }, reset)
    ]),
    h("button", { onClick: () => cambiarValor(valor + 1) }, "Aumentar")
  ]);
}

window.onload = function() {
  ReactDOM.render(
    [
      React.createElement(Contador, { reset: "Resetear", id: "contador-1" }),
      React.createElement(Contador, { reset: "Resetear", id: "contador-2" })
    ],
    document.getElementById("app")
  );
};
