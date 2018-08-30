import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 40px;
  background-color: white;
  width: 200px;
  position:relative;

`;

const DraggableCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: -62px;
  background-color: white;
  border: 1px solid lightgrey;
`;

const Title = styled.p`
  cursor: pointer;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            <DraggableCircle />
            <Title onClick={() => {console.log('click on title');}}>Test title</Title>
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
