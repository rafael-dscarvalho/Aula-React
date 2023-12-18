import { useState } from "react"


export function Home(){

    const [nome, setNome] = useState("Qual é???", "")

    return(
        <div className='super-container'>
            <div className='container'>

                <h1>Meu nome é... {nome}</h1>

                <div className='inner-container'>

                    <label>Qual é o meu nome mesmo 🤔 ??</label>

                    <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>

                </div>      
            </div>
        </div>
    )
}