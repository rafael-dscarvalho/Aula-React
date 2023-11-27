import image1 from '../images/image1.jpg'

export function Hero(){
    return(
        <>
            <img className='logo' src={image1}/>
            <h1>Transformando <strong>espaço</strong>, Criando <strong>história</strong> </h1>
            <div className='text-container'>
            <p>
                Nós criamos ambientes <span className='gray-span'>exclusívos</span> e <span className='gray-span'>únicos</span>, com muito bom gosto e profissionalismo, 
                investimos tempo e <span className='yellow-span'>dedicação no seu projeto</span>. Nosso compromisso vai além de 
                simplesmente decorar.
            </p>
            <p>
                Tenha <span className='yellow-span'>ambientes limpos</span> e bem decorados, transmitindo <span className='gray-span'>elegância</span> e <span className='gray-span'>finesse</span> para todo 
                aquele que estiver ali. Sua história visual começa aqui!
            </p>
            </div>
            
        </>
    )
}