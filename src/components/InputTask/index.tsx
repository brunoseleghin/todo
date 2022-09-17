import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css'

export function InputTask() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder='Adicione uma nova tarefa'
      />

      <button className={styles.button}>
        Criar <PlusCircle size={23} />
      </button>
    </div>
  );
}