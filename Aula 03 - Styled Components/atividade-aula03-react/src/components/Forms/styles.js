import styled from 'styled-components'

export const StyledFormContainer = styled.div`
    width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background:#ffffff; 
    box-shadow: 1px 5px 18px 5px #e3e3e3; 
    border-radius:15px; 
    padding:1em;
`

export const StyledFormGroup = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;
`

export const StyledH1 = styled.h1`
     font-family: 'Roboto', sans-serif;
    font-size: 2.3em;
    color: #3F3D56;
    border-bottom: 1px #f0eded solid;
    margin-bottom: 10px;
    padding-bottom: 10px;
`

export const StyledInput = styled.input`
    font-size: 16px;
    font-family: inherit;
    padding: 8px 15px;
    border-radius: 4px;
    border: 1px #484d50 solid;
    background: #fdfdfd;
    outline: none;
    width: 100%;
    transition: all 0.3s;
`

export const StyledLabel = styled.label`

    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;

`

export const StyledTextArea = styled.textarea`
    font-size: 16px;
    font-family: inherit;
    padding: 8px 15px;
    border-radius: 4px;
    border: 1px #484d50 solid;
    background: #fdfdfd;
    outline: none;
    width: 100%;
    transition: all 0.3s;
`

export const StyledButton = styled.button`
    float: left;
    display: block;
    padding: 5px 30px;
    border: none;
    outline: none;
    background-color: #3F3D56;
    color: #fff;
    text-shadow: 0 0 5px rgb(0, 0, 0);
    font-family: inherit;
    font-size: 25px;
    border-radius: 6px;
    margin: 20px auto;
    cursor: pointer;
    transition: all 0.3s;
`