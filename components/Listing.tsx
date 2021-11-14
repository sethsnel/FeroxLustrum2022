import { default as NextLink } from 'next/link'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import styled from '@emotion/styled'
import { FiClock } from 'react-icons/fi'

import { hrefResolver, linkResolver } from './../prismic-configuration'
import formatDate from '../utils/formatDate'
import { trackGAEvent } from '../utils/googleAnalytics'
import { useTheme } from '../utils/theme'
import { IArticle } from '../schemas'

import Chip from './Chip'
import dayjs from 'dayjs'

interface ListingProps {
  articles: {
    uid: string
    data: IArticle
  }[]
}

const Listing = ({ articles }: ListingProps) => {
  const { theme } = useTheme()

  const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 325px);
    grid-auto-rows: 200px;
    grid-gap: 1.25rem;
    justify-content: center;
    margin: auto;
    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
    }
  `

  const ArticleCard = styled.div`
    display: flex;
    width: 325px;
    margin: 0 auto;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${theme.colors.primary};
  `

  return (
    <GridLayout>
      {articles &&
        articles
          .sort((a1, a2) => {
            return dayjs(a1.data.created).diff(dayjs(a2.data.created))
          })
          .map((article) => (
            <NextLink
              href={hrefResolver(article)}
              as={linkResolver(article)}
              passHref
            >
              <ArticleCard
                aria-label={`Read article ${article.uid}`}
                title={article.uid}
                key={article.uid}
              >
                {/* {article.data.article_image &&
            article.data.article_image?.dimensions ? (
              <div
                style={{
                  overflow: 'hidden',
                  gridColumn: '1 / span 1',
                  gridRow: '1 / span 2',
                  borderRadius: '10px',
                  background: 'rgba(168,74,92,0.8)',
                }}
              >
                <NextLink
                  href={hrefResolver(article)}
                  as={linkResolver(article)}
                  passHref
                >
                  <a>
                    {/* <Image
                      src={article.data.article_image.url}
                      alt={article.data.article_image.alt}
                      title={article.data.article_image.alt}
                      layout='responsive'
                      width={article.data.article_image.dimensions.width}
                      height={article.data.article_image.dimensions.height}
                      className='article-image'
                    />
                  </a>
                </NextLink>
              </div>
            ) : undefined} */}
                <div>
                  <h2
                    sx={{
                      m: 0,
                      pt: 0,
                      fontSize: [3, 4],
                      '@media (max-width: 30rem)': {
                        pt: 0,
                        height: 'auto',
                      },
                    }}
                  >
                    <NextLink
                      href={hrefResolver(article)}
                      as={linkResolver(article)}
                      passHref
                    >
                      <a
                        sx={{
                          color: 'secondary',
                          textDecoration: 'none',
                          ':hover,:focus': {
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          },
                        }}
                        onClick={() =>
                          trackGAEvent(
                            'home',
                            `clicked on ${article.uid} article title`,
                            'text click'
                          )
                        }
                        rel='noreferrer noopener'
                      >
                        {RichText.asText(article.data.title)}
                      </a>
                    </NextLink>
                  </h2>
                </div>
              </ArticleCard>
            </NextLink>
          ))}
    </GridLayout>
  )
}

/**
 * Truncate the excerpt text based on character count
 * @param {String} text
 */
const truncateText = (text: string): string => {
  if (text.length > 75) {
    return text.slice(0, 75).concat('...')
  }
  return text
}

export default Listing
