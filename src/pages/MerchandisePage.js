import { useEffect } from 'react'
import MerchandiseCard from '../components/MerchandisePage/MerchandiseCard'
import MerchandiseSearch from '../components/MerchandisePage/MerchandiseSearch'

const MerchandisePage = ({ match }) => {
  useEffect(() => {
    document.title = 'Merchandise | EGO COFFE'
  }, [])

  return (
    <section className='merchandise'>
      <div className='container'>
        <MerchandiseSearch />
        <MerchandiseCard match={match} />
      </div>
    </section>
  )
}

export default MerchandisePage
