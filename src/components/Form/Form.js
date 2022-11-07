import { Formik } from 'formik'
import {FormWrapper, SearchForm, SearchInp, IconBox } from './Form.styled'
import { ImSearch } from "react-icons/im";

export const Form = ({onChange, searchedMovie}) => {
     const initialValues = {
        search: '',
    }


    const changeHandler = (values) => {
          onChange(values)
    }
    
    return (
        <Formik initialValues={initialValues}>
            <FormWrapper>
            <SearchForm  autoComplete="off" onChange={(e) => changeHandler(e.target.value)}>
            
                <SearchInp
                    name='search'
                    type="text"
                    autoFocus
                    placeholder="Search movies"
                    value={searchedMovie}
                />
                <IconBox disabled>
                <ImSearch/>
                </IconBox>
            </SearchForm>
            </FormWrapper>
        </Formik>
    )
}