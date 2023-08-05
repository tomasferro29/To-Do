import styled from 'styled-components'
import TaskIndividual from './TaskIndividual';
import NewTask from './NewTask';

const BigWrapper = styled.div`
    display:grid;
    width: 100%;
    justify-content: center;
    background-color: #222;
    padding-bottom:120px;
`;
const Wrapper = styled.div`
    background-color: #333;
    display: grid;
    justify-content: center;
    padding: 30px;
    border: 1px solid #333;
    width: 600px;
    min-height: 200px;
    gap: 10px;
`;

const MainHeader = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px;
    color: #fff;
`;

export default function TasksWrapper() {
    return (
        <BigWrapper>
            <MainHeader>
                <h1>Tasks To-Do</h1>
                <NewTask/>
            </MainHeader>
            <Wrapper>

                <TaskIndividual/>    
  
            </Wrapper>
        </BigWrapper>
    )
}