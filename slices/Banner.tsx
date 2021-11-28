import Image from 'next/image'

import { IImage } from '../schemas'

interface BannerProps {
  image: IImage
}

const Banner = ({ image: { alt, url, dimensions } }: BannerProps) => {
  return (
    <>
      {url && dimensions?.width ? (
        <>
          <Image
            src={url}
            alt={alt}
            title={alt}
            layout='responsive'
            width={dimensions.width}
            height={dimensions.height}
          />
          <p
            sx={{
              textAlign: 'center',
              margin: '0 auto',
              pt: 2,
              fontFamily: 'heading',
              fontSize: [2, 3],
            }}
          >
            {alt}
          </p>
        </>
      ) : undefined}
    </>
  )
}

Banner.defaultProps = {
  image: {
    alt: '',
    url: '',
    dimensions: {
      width: 0,
      height: 0,
    },
  },
}

export default Banner
