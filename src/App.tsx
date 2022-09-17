import './global.css';
import styles from './App.module.css'

import { Header } from './components/Header';
import { InputTask } from './components/InputTask';


export default function App() {

  return (
    <div>
      <Header />
      <InputTask />
    </div>
  )
}
