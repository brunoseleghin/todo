import './global.css';
import styles from './App.module.css'

import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskInfo } from './components/TaskInfo';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

export default function App() {
  const [counterTaskDone, setCounterTaskDone] = useState<TaskProps[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask(newTask: string) {
    const dataTask = {
      id: new Date().getTime(),
      title: newTask,
      done: false
    }

    if (tasks.length > 0) {
      setTasks([...tasks, dataTask]);
    } else {
      setTasks([dataTask]);
    }
  }

  function handleTaskDone(idTask: number) {
    const updatedTasks = tasks.map(task => ({ ...task }));

    updatedTasks.find(task => {
      if (task.id === idTask) {
        task.done = !task.done;
      }
    });

    const counterTaskDone = updatedTasks.filter(task => {
      return task.done === true;
    });

    setCounterTaskDone(counterTaskDone);

    setTasks([...updatedTasks]);
  }

  function handleTaskDelete(idTask: number) {
    const updatedTasks = tasks.filter(task => {
      return task.id !== idTask;
    });

    TasksDone(updatedTasks);

    setTasks([...updatedTasks]);
  }

  function TasksDone(tasks: TaskProps[]) {
    const counterTaskDone = tasks.filter(task => {
      return task.done === true;
    });

    setCounterTaskDone(counterTaskDone);
  }

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <TaskInput addTask={handleAddTask} />

        <TaskInfo tasks={tasks} numberOfTasksDone={counterTaskDone} />

        <TaskList tasks={tasks} taskDone={handleTaskDone} taskDelete={handleTaskDelete} />
      </main >
    </div >
  )
}
