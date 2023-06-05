import styles from '../styles/EmptyList.module.css'
import { Clipboard } from 'phosphor-react'

export function EmptyList() {
  return (
    <div className={styles.content}>
      <Clipboard size={80}/>

      <span>Voce ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
