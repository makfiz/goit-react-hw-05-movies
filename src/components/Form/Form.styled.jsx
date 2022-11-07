import styled from "styled-components";
import { Form, Field } from 'formik'
    

export const FormWrapper = styled.div`
  display:flex;
  justify-content:center;
`

export const SearchForm = styled(Form)`
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border:${p => p.theme.borders.profile};
  border-radius: 3px;
  overflow: hidden;
  `

export const SearchInp = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
}
  `
export const IconBox = styled.button`
 display: inline-block;
  width: 35px;
  height: 35px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  outline: none;
`