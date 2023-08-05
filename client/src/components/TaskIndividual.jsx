import styled from 'styled-components'
import ButtonDelete from './DeleteButton';
import EditButton from './EditButton';
import MarkDone from './MarkDoneButton';


const Task = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #444;
    height: 30px;
    min-width: 100%;
    color: #222;
    font-size: 2rem;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export default function TaskIndividual () {


    return (
        <div>
        
        <Task>
            <h6>Task 1</h6>
            <ButtonsWrapper>
                <EditButton />
                <ButtonDelete/>
                <MarkDone/>
            </ButtonsWrapper>
        </Task>
        </div>
    )
}