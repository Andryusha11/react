import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  createTask,
  deleteTask,
  fetchTasksList,
  updateTask,
} from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount = () => {
    this.fetchTasks();
  };

  fetchTasks = () => {
    fetchTasksList().then((tasksList) => this.setState({ tasks: tasksList }));
  };

  onCreate = (text) => {
    const newTask = {
      text: text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  onDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
