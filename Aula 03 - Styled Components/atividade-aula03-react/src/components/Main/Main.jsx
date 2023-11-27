import logo from '../../imgs/logo.jpg'

import {StyledH1, StyledStrong, StyledParagraph, StyledSpanBold, StyledSpanGray} from './styles'

export function Main(){
    return(
        <main>
            <div>
                <img className='logo' src={logo}/>
                <StyledH1>O seu próximo <StyledStrong>destino</StyledStrong> pode estar aqui...</StyledH1>
                <StyledParagraph>
                    Aqui você encontra uma seleção de <StyledSpanBold>pacotes completos</StyledSpanBold> para as suas férias!
                </StyledParagraph>
                <StyledParagraph className='main-middle-p'>
                    No <StyledSpanGray>ConnectFlight</StyledSpanGray> você encontra pacotes de viagens nacionais e<br />
                    internacionais que incluem: passagens aéreas, hotéis, café da manhã,<br />
                    e até seguro viagem com <StyledSpanBold>preços arrasadores</StyledSpanBold>!
                </StyledParagraph>
                <StyledParagraph>
                    Se você ainda não tem um destino definido, confira nossa seção de ofertas.
                </StyledParagraph>
            </div>   
        </main>
    )
}