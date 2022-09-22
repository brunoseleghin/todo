import { TaskProps } from '../../App';
import styles from './styles.module.css';

interface TaskInfoProps {
  tasks: TaskProps[];
  numberOfTasksDone: TaskProps[];
}

export function TaskInfo({ tasks, numberOfTasksDone }: TaskInfoProps) {
  return (
    <div className={styles.wrapperInfo}>
      <div className={styles.wrapperTasks}>
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <p className={styles.countTask}>{tasks.length}</p>
      </div>

      <div className={styles.wrapperTasks}>
        <p className={styles.completedTasks}>Concluídas</p>
        <p className={styles.countTask}>{numberOfTasksDone.length} de {tasks.length}
        </p>
      </div>
    </div>
  );
}