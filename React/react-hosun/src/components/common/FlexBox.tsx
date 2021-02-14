import styled from "styled-components";

interface FlexBoxProps {
    flexDirection?:string
}
const StyledFlexBox = styled.div`
    display : flex;
    flex-direction: ${(props: FlexBoxProps) =>
        props.flexDirection ? props.flexDirection : 'row'};
`
interface Props {
    children : JSX.Element[] | JSX.Element
}


const FlexBox = (props: FlexBoxProps & Props) => {
    const {flexDirection, children} = props

    return <StyledFlexBox flexDirection={flexDirection}>{children}</StyledFlexBox>
}

export default FlexBox

