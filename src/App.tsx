import './global.css';
import styles from './App.module.css'

import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { InfoTask } from './components/InfoTask';

import { Check, Trash } from 'phosphor-react';

import Clipboard from './assets/Clipboard.svg'

export default function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <InputTask />

        <InfoTask />

        {false ?
          <div className={styles.wrapperListEmpty}>
            <div className={styles.wrapperImg}>
              <img src={Clipboard} />
            </div>

            <div className={styles.wrapperText}>
              <b>Você ainda não tem tarefas cadastradas</b>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
          :
          <div className={styles.wrapperList}>
            {true ?
              <button className={styles.taskMarker}></button>
              :
              <button className={styles.taskMarkerDone}><Check size={14} /></button>
            }

            {true ?
              <p className={styles.taskText}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </p>
              :
              <p className={styles.taskTextDone}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </p>
            }

            <Trash className={styles.taskTrash} size={25} />
          </div>
        }
      </main >
    </div >
  )
}
