import React from 'react';
import ReactDOM from 'react-dom';
import { initialData } from './initial-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

class App  extends React.Component {
  state = initialData;

  // the only required prop of the DragDropContext
  // it's main purpose is to persist items order
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTasksIds = Array.from(column.taskIds);
    newTasksIds.splice(source.index, 1);
    newTasksIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTasksIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map(colId => {
          const col = this.state.columns[colId];
          const tasks = col.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={col.id} column={col} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
