
import { useSpring, animated, config } from "react-spring"

const UsuarioItem = ({ usuario, index }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    config: config.gentle,
    delay: index * 300, 
  })

  return (
    <animated.li style={props}>
      <div className="list-container">
        <div>{usuario}</div>
      </div>
    </animated.li>
  )
}

export function Lista() {
  const usuarios = [
    "Bruno - 111111111",
    "Rafael - 222222222",
    "Lucas - 333333333",
    "Ruan - 444444444",
    "Gustavo - 555555555",
    "Luis - 666666666",
    "Leonardo - 777777777",
    "Marisa - 888888888",
    "João - 999999999",
  ]

  const listaUsuarios = usuarios.map((usuario, index) => (
    <UsuarioItem key={index} usuario={usuario} index={index} />
  ))

  return (
    <div className="form-container">
      <h1>Listar Usuários</h1>
      <ul>{listaUsuarios}</ul>
    </div>
  )
}