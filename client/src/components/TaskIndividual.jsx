import styled from 'styled-components'
import ButtonDelete from './DeleteButton';
import EditButton from './EditButton';
import MarkDone from './MarkDoneButton';


const Task = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid blue;
    height: 30px;
    min-width: 400px;

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