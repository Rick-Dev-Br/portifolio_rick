export interface Repositorio {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazars_count: number
  forks_count: number
}

export const buscarRepositorios = async (
  usuario: string
): Promise<Repositorio[]> => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=12`
  )
  const data = await response.json()
  return data
}
