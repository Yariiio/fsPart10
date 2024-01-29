import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../grapgql/queries'

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    })

    const repositories = error || loading ? undefined : data.repositories
    return { repositories, loading }
}

export default useRepositories
