import styled from 'styled-components'

const Edit = styled.button`
    border-radius: 50%;
    height: 30px;
    width: 30px;
`;


export default function EditButton() {

    function alertEdit(e) {
        e.preventDefault()
        alert('edit')
    }
    return(
        <Edit onClick={(e) => alertEdit(e)}>
            🖋
        </Edit>
    )
}