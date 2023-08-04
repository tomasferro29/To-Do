import styled from 'styled-components'

const New = styled.button`
    border-radius: 10px;
    height: 30px;
    width:  10rem;
`;


export default function NewTask() {

    function alertNewTask(e) {
        e.preventDefault()
        alert('new task')
    }

    return(
        <New onClick={(e) => alertNewTask(e)}>
            New Task 
        </New>
    )
}