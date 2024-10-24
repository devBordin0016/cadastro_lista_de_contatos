import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f4f8;
`

export const Title = styled.h1`
    margin-bottom: 20px;
`

export const FormContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px; 
    width: 300px;
`

export const StyledButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px; 
    background-color: #4caf50; 
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #FFB22C; 
    }
`

export const RemoveButton = styled(StyledButton)`
    background-color: #f44336; 
    margin-left: 5px;
    margin-top: 5px; 

    &:hover {
        background-color: #000; 
        color: white; 
    }
`

export const CancelButton = styled(StyledButton)`
    background-color: #f44336; 
    margin-left: 5px; 

    &:hover {
        background-color: #000; 
        color: white; 
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContactListWrapper = styled.ul`
    list-style-type: none; 
    padding: 0; 
    margin-left: -8px; 
`

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 0;
    background-color: #fff;
`

export const EditButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #2196f3;
    color: white;
    cursor: pointer;
    margin-left: 5px;

    &:hover {
        background-color: #1976d2;
    }
`
