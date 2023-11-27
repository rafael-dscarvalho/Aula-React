import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 450px;
  display: block;
  margin-right: 45px;
`

export const StyledInput = styled.input`
  margin: 0 auto;
  width: 101%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  &:focus{
    border: 1px solid #000000;
    transition: 0.35s ease;
    color: #000000;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &:-ms-placeholder {
     transition: opacity 0.45s ease; 
  	 opacity: 0;
     }    
   }
`

export const StyledIcon = styled.img`
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -220px;
`