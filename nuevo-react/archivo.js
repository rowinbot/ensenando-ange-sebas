// Componente
function Boton(props) {
  return React.createElement("button", { onClick: props.onClick }, props.title);
}

function MeGusta() {
  var [liked, cambiar] = React.useState(false);

  if (liked) {
    return [
      "te gusto, ahora suscribete",
      React.createElement(
        "button",
        { onClick: () => cambiar(false), key: "dos" },
        "suscribete"
      )
    ];
  }

  return React.createElement(
    "button",
    { onClick: () => cambiar(true) },
    "Me gusta"
  );
}

// La función querySelector hace la misma funcionalidad que getElementById en este caso
// al igual que en CSS utiliza # para referenciar a un ID.
var domContainer = document.querySelector("#react-ancla");
ReactDOM.render(React.createElement(MeGusta), domContainer);
