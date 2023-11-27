import "./styles.css"
import logo from "../../imgs/logo.jpg";


export function MainContent(){
  return(
      <main>
        <div>
          <img src={logo}></img>
          <h1>O seu próximo <span>destino</span> pode estar aqui...</h1>
          <p>Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!</p>
          <p className="middle-text">No <strong className="connect">ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais<br />
            internacionais que incluem: passagens aéreas, hotéis, café da manhã,<br />
            e até seguro viagem com <strong>preços arrasadores!</strong>
          </p>
          <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p>
        </div>
      </main>
  )
}

export function Footer(){
  return(
    <footer>
      <ul>
        <li><strong>Destinos</strong></li>
        <li><strong>Ofertas</strong></li>
        <li><strong>Contato</strong></li>
      </ul>
    </footer>
  )
}

export function Home(){
  return(
    <>
      <MainContent />
      <Footer />
    </>
  )
}