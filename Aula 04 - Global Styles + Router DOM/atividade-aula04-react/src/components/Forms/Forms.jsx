
import {StyledFormContainer, StyledFormGroup, StyledH1, StyledInput, StyledLabel, StyledTextArea, StyledButton} from './styles'

export function Forms(){
    return(
        <StyledFormContainer>

        <StyledH1>Entre em contato</StyledH1>

        <form class="form" method="post">
            
            <StyledFormGroup>
                <StyledLabel>Nome</StyledLabel>
                <StyledInput type="text" />
            </StyledFormGroup>
            
            <StyledFormGroup>
                <StyledLabel>Email</StyledLabel>
                <StyledInput type="email" />
            </StyledFormGroup>    

            <StyledFormGroup>
                
                <StyledLabel>Assunto</StyledLabel>
                <StyledInput type="text" />

            </StyledFormGroup>

            <StyledFormGroup>
          
                <div>
                    
                    <StyledLabel>Mensagem</StyledLabel>
                    <StyledTextArea  cols="40" rows="6" ></StyledTextArea>

                </div>

                <div class="submit">

                  <input type="hidden" name="acao" value="enviar" />
                  <StyledButton type="submit" name="Submit" class="submit_btn" >Cadastrar</StyledButton>
                
                </div>

            </StyledFormGroup>

        </form>

</StyledFormContainer>
    )
}