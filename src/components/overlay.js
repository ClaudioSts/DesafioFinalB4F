import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Overlay() {
  const [visivel, setVisivel] = useState(true)
  const [data, setData] = useState("")

  return (
      <div>

          <div role='content'>

              {
                  visivel ?

                      <div>
                          <h3>Teste</h3>
                          <input type="date" value={data} onChange={(e) => { setData(e.target.value) }} />
                          <button onClick={() => setVisivel(prevVisivel => !prevVisivel)}>Apply</button>
                      </div>

                      :

                      <div>
                          <button onClick={() => setVisivel(prevVisivel => !prevVisivel)}>Alterar</button>
                      </div>

              }
          </div>
      </div >
  )
}