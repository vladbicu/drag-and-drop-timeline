import React from 'react';
import styled from 'styled-components'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 40px;
  border-left: 2px solid lightgrey;
  border-radius: 2px;
  padding: 10px 10px 10px 30px;
`;
const Title = styled.h3`
  padding: 10px;
`;
const TaskList = styled.div`
  padding: 10px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}