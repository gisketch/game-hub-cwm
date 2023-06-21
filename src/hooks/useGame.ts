import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import APIClient from '../services/apiClient'
import { Game } from './useGames'

//TODO: GAME
const apiClient = new APIClient<Game>('/games')

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  })

export default useGame