import {StyledInput, StyledContainer, StyledIcon} from './styles'

export function Busca(){
    return(
        <StyledContainer>
            <StyledInput type='text' placeholder='Busca'/>
            <StyledIcon src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
        </StyledContainer>

    )
}