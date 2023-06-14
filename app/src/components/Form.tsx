import { PlusCircle } from "phosphor-react"
import styles from '../styles/Form.module.css'
import { ChangeEvent, FormEvent } from "react";

interface InputProps {
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isInvalid: any;
  inputValue: string
}

export function Form({handleInputValue, handleSubmit, isInvalid, inputValue}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleInputValue}
          value={inputValue}
        />

        <button
          type="submit"
          disabled={isInvalid}
        >
          <PlusCircle size={20}/>
          Criar
        </button>
      </form>
    </div>
  )
}
