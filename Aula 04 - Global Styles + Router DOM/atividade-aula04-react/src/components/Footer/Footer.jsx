
import {StyledList, StyledListItem, StyledAnchor} from './styles'

export function Footer(){
    return(
        <footer>
            <StyledList>
                <StyledListItem><StyledAnchor href='/destinos'>Destinos</StyledAnchor></StyledListItem>
                <StyledListItem><StyledAnchor href='#'>Ofertas</StyledAnchor></StyledListItem>
                <StyledListItem><StyledAnchor href='/contato'>Contato</StyledAnchor></StyledListItem>
            </StyledList>
        </footer>
    )
}