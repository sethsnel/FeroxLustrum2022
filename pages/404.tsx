import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
const Layout = dynamic(() => import('../components/Layout'), {
  loading: Loader,
})

export default function Custom404() {
  return (
    <Layout title='Page Not Found' page='404'>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          fontSize: [3, 4],
        }}
      >
        <p>Deze pagina bestaat niet!</p>
        <picture className='pnf-image'>
          <source type='image/png' srcSet='/icons/icon-512x512.png' />
          <img
            src='/icons/icon-512x512.png'
            alt='404 Page Not Found'
            className='pnf-image'
          />
        </picture>
      </div>
    </Layout>
  )
}
