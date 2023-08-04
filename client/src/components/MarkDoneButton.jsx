import styled from 'styled-components'

const Mark = styled.button`
    border-radius: 50%;
    height: 30px;
    width: 30px;
`;

export default function MarkDone() {

    function alertDone(e) {
        e.preventDefault()
        alert('task completed')
    }

    return(
        <Mark onClick={(e) => alertDone(e)}>
            ✔
        </Mark>
    )
}