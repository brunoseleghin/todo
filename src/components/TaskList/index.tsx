import styles from './styles.module.css';



import Clipboard from '../../assets/Clipboard.svg'
import { TaskProps } from '../../App';
import { TaskItem } from '../TaskItem';

interface TaskListProps {
  tasks: TaskProps[];
  taskDone: (taskId: number) => void;
  taskDelete: (taskId: number) => void;
}

export function TaskList({ tasks, taskDone, taskDelete }: TaskListProps) {
  return (
    <>
      {tasks.length > 0 ? (
        <div>
          {tasks.map(task => {
            return (
              <TaskItem key={task.id} task={task} taskDone={taskDone} taskDelete={taskDelete} />
            )
          })}
        </div>
      ) : (
        <div className={styles.wrapperListEmpty}>
          <div className={styles.wrapperImg}>
            <img src={Clipboard} />
          </div>

          <div className={styles.wrapperText}>
            <b>Você ainda não tem tarefas cadastradas</b>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )
      }
    </>
  )
}