import { useState } from "react"

export function Cadastro(){

    const [nome, setNome] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    let mensagem = () => {console.log(`Nome: ${nome}\nData de Nascimento: ${dataNasc}\nEmail: ${email}\nCPF: ${cpf}`)}

    return(
        <div className="form-container">

        <h1>Cadastro</h1>

        <form className="form">
            
            <div className="group-container">
                <input type="text" placeholder="Nome" value={nome} onChange={event => setNome(event.target.value)}/>
            </div>
            
            <div className="group-container">  
                <input type="date" placeholder="Data de Nascimento" value={dataNasc} onChange={event => setDataNasc(event.target.value)}/>
            </div>

            <div className="group-container">
                <input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
            </div>    

            <div className="group-container">  
                <input type="number" placeholder="CPF" value={cpf} onChange={event => setCpf(event.target.value)}/>
            </div>

            <div className="button-container">  
                <button type="button" className="btn-cancelar" >Cancelar</button>
                <button type="button" className="btn-cadastrar" onClick={mensagem}>Cadastrar</button>
            </div>

        </form>

            <a className="list-link" href="/lista">Visualizar usuários cadastrados</a>

        </div>

    )
}