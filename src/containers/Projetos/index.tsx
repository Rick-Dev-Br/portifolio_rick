import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import type { Repositorio } from '../../components/GitServices/githubApi'
import { buscarRepositorios } from '../../components/GitServices/githubApi'
import { Lista } from './styles'

const Projetos = () => {
  const [repositorios, setRepositorios] = useState<Repositorio[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    buscarRepositorios('Rick-Dev-Br')
      .then(setRepositorios)
      .finally(() => setCarregando(false))
  }, [])

  if (carregando) {
    return (
      <section>
        <Titulo fontSize={16}>Projetos</Titulo>
        <Paragrafo>Carregando projetos...</Paragrafo>
      </section>
    )
  }

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repositorios.map((repositorio) => (
          <li key={repositorio.id}>
            <Projeto
              titulo={repositorio.name}
              descricao={repositorio.description || 'Projeto sem descrição'}
              link={repositorio.html_url}
              linguagem={repositorio.language}
              stars={repositorio.stargazars_count}
              forks={repositorio.forks_count}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
