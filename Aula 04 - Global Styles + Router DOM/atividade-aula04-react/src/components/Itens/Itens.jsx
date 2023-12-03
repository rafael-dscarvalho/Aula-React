import {StyledBoxx, StyledBoxHeader, StyledList, StyledListItem, StyledH3} from './Styles.js'

export function Itens(){
    return(
        <StyledBoxx>
		<StyledBoxHeader>
			<StyledH3>
				Destinos
			</StyledH3>
		</StyledBoxHeader>
		<StyledList>
			<StyledListItem>
					Rio de Janeiro
			</StyledListItem>
			<StyledListItem>
					Florianópolis
			</StyledListItem>
			<StyledListItem>
					Gramado
			</StyledListItem>
			<StyledListItem>
					Maceió
			</StyledListItem>
			<StyledListItem>
					Salvador
			</StyledListItem>
			<StyledListItem>
					Natal
			</StyledListItem>
            <StyledListItem>
					Foz do Iguaçu
			</StyledListItem>
            <StyledListItem>
					Ilhabela
			</StyledListItem>
            <StyledListItem>
					João Pessoa
			</StyledListItem>
            <StyledListItem>
					Manaus
			</StyledListItem>
		</StyledList>
	</StyledBoxx>
    )
}