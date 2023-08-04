import styled from 'styled-components'

const Delete = styled.button`
    border-radius: 50%;
    height: 30px;
    width: 30px;
`;


export default function DeleteButton() {

    function alertDelete(e) {
        e.preventDefault()
        alert('delete')
    }
    return(
        <Delete onClick={(e) => alertDelete(e)}>
            ❌
        </Delete>
    )
}