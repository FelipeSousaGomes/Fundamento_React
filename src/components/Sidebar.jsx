import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/90236911?v=4'></img>
                <strong>Felipe Sousa Gomes</strong>
                <span> Developer </span>

            </div>

            <footer>
                <a href='#' >
                    <PencilLine size={20} />
                    Edite seu perfil
                </a>
            </footer>

        </aside>
    )
}