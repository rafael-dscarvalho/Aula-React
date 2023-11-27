
import {StyledList, StyledListItem, StyledAnchor} from './styles'

export function Footer(){
    return(
        <footer>
            <StyledList>
                <StyledListItem>Destinos</StyledListItem>
                <StyledListItem>Ofertas</StyledListItem>
                <StyledListItem><StyledAnchor href='../Forms/Forms.jsx'>Contato</StyledAnchor></StyledListItem>
            </StyledList>
        </footer>
    )
}