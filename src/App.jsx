import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'




export function App() {
  return (

    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />

        <main>

          <Post author="Felipe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione a odio adipisci nisi quam, nesciunt labore enim quisquam quo non sequi, ipsum, sed fugiat quasi ut aspernatur in porro! "
          />
          <Post
            author="Junim"
            content="Lelelellelelel  "
          />
        </main>
      </div>
    </div>
  )
}


