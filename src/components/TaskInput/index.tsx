import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';

interface TaskInputProps {
  addTask: (task: string) => void;
}

export function TaskInput({ addTask }: TaskInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value;

    if (!newTask)
      return;

    setTask(newTask);
  }

  function handleAddTasks() {
    if (!task)
      return

    addTask(task);
    setTask('');
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={(value) => handleAddNewTask(value)}
        value={task}
        placeholder='Adicione uma nova tarefa'
      />

      <button
        className={styles.button}
        onClick={handleAddTasks}
      >
        Criar <PlusCircle size={23} />
      </button>
    </div>
  );
}