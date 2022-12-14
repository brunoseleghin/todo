import { TaskProps } from '../../App';
import { Check, Trash } from 'phosphor-react';

import styles from './styles.module.css';

interface TaskItemProps {
  task: TaskProps;
  taskDone: (idTask: number) => void;
  taskDelete: (idTask: number) => void;
}

export function TaskItem({ task, taskDone, taskDelete }: TaskItemProps) {
  return (
    task.done === false ? (
      <div className={styles.wrapperList}>
        <button className={styles.taskMarker} onClick={() => taskDone(task.id)} />
        <p className={styles.taskText}>
          {task.title}
        </p>
        <button className={styles.taskDelete} onClick={() => taskDelete(task.id)}>
          <Trash size={25} />
        </button>
      </div>
    ) : (
      <div className={styles.wrapperList}>
        <button className={styles.taskMarkerDone} onClick={() => taskDone(task.id)}>
          <Check size={14} />
        </button>
        <p className={styles.taskTextDone}>
          {task.title}
        </p>
        <button className={styles.taskDelete} onClick={() => taskDelete(task.id)}>
          <Trash size={25} />
        </button>
      </div>
    )
  );
}