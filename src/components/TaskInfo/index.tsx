import styles from './styles.module.css';

export function TaskInfo() {
  return (
    <div className={styles.wrapperInfo}>
      <div className={styles.wrapperTasks}>
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <p className={styles.countTask}>0</p>
      </div>

      <div className={styles.wrapperTasks}>
        <p className={styles.completedTasks}>Concluídas</p>
        <p className={styles.countTask}>0</p>
      </div>
    </div>
  );
}