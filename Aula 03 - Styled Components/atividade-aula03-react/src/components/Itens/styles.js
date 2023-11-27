import styled from 'styled-components'

export const StyledBoxx = styled.div`
    width: 500px;
    height: 650px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25),
	0 10px 10px rgba(0,0,0,0.22);
    font-family: 'Roboto', sans-serif;
`

export const StyledBoxHeader = styled.div`
	padding: 10px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
    background-color: #3F3D56;
    height: 100px;
`

export const StyledH3 = styled.h3`
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    margin: 0;
`

export const StyledList = styled.ul`
	position: relative;
	padding: unset;
	margin: 0;
	width: 100%;
`

export const StyledListItem = styled.li`
	list-style: none;
	padding: 15px 40px;
	box-shadow: 0 5px 25px rgba(0,0,0,.1);
	position: relative;
	cursor: pointer;
	transition: all 0.3s;
    font-size: 16px;
    height: 25px;
    display: flex;
    align-items: center;

    &:hover{
    transform: scale(1.1);
	z-index: 100;
    background-color: #3F3D56;
	color: #fff;
    }
`