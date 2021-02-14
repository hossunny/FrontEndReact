import styled from "styled-components";


const StyledCommonButton = styled.button`
    color: white;
    background-color: #01bf86;
    border: #01bf86;
    width: 150px;font-weight: 600;
    height: 40px;border-radius: 400px;
    cursor: pointer;
    :hover{
        background-color: transparent ;
        border: 2px solid #01bf86 ;
        color: #01bf86 ;
        box-shadow: none ;
    }
`
interface Props {
    children? : string
}

const CommonButton = (props : Props) => {
    const {children} = props
    return <StyledCommonButton>{children}</StyledCommonButton>
}

export default CommonButton