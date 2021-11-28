import { ReactElement } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'

import Head from '../components/Head'
import Header from '../components/Header'
import Footer from './Footer'
import siteUrl from '../utils/siteUrl'
import routeURL from './../utils/routeURL'
import { useTheme } from '../utils/theme'

export type LayoutProps = {
  title?: string
  page?: string
  pathUrl?: string
  description?: string
  image?: string
  children: ReactElement | ReactElement[]
}

const Layout = ({
  title,
  pathUrl,
  page,
  description,
  image,
  children,
}: LayoutProps) => {
  const URL = siteUrl(pathUrl || routeURL())
  const { theme } = useTheme()
  const siteImage = image || siteUrl('/site_image.png')
  //console.info(page)
  return (
    <>
      <Head
        pathUrl={URL}
        page={page}
        title={title}
        description={description}
        image={siteImage}
      ></Head>
      <div className='content-wrapper'>
        <Header />
        <main className='main'>{children}</main>
        <Footer />
        <IoIosArrowDropupCircle
          className='scroll-top-icon'
          sx={{
            color: theme.colors.primary,
          }}
          onClick={() => {
            scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }}
        />
      </div>
    </>
  )
}

export default Layout
