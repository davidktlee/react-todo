import styled from '@emotion/styled'

const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: #5ac8ff;
  color: #fff;
  border: none;
  cursor: pointer;
`
const Buttons = (props) => {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  )
}
export default Buttons
