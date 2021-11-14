import Icon from './Icon'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        {/* <div className="links-row">
          <div>
            <a
              href="https://github.com/iamsainikhil/nextjs-prismic-blog-starter"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="GitHub"
              title="GitHub"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on GitHub link in Footer`,
                  'link click'
                )
              }
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://iamsainikhil.com/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="special-link"
              aria-label="Privacy Policy"
              title="Privacy Policy"
              sx={{ color: 'primary' }}
              onClick={() =>
                trackGAEvent(
                  'footer links',
                  `clicked on Privacy Policy link in Footer`,
                  'link click'
                )
              }
            >
              Privacy Policy
            </a>
          </div>
        </div> */}

        <div className='social-row'>
          <Icon
            name='Instagram'
            url='https://instagram.com/ferox_nsl'
            style={{
              color: 'primary',
              fontSize: '1.75rem',
            }}
          />

          <Icon
            name='Tiktok'
            url='https://vm.tiktok.com/ZM8VvBdYP/'
            style={{
              color: 'primary',
              fontSize: '1.75rem',
            }}
          />
        </div>

        {/* <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()}{' '}
        </p> */}
      </div>
    </footer>
  )
}

export default Footer
