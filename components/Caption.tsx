import { Themed } from 'theme-ui'

interface CaptionProps {
  name: string
  type: string
}

const Caption = ({ name, type }: CaptionProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Themed.p
        sx={{
          fontFamily: 'light',
          textAlign: 'right',
          mt: 0,
        }}
      >
        {type === 'articles' ? undefined : (
          //   <Themed.em sx={{ fontSize: '3em' }}>Ferox Lustrumweekend</Themed.em>
          <Themed.em>
            Gerelateerd aan: <strong>{name}</strong> {type}.
          </Themed.em>
        )}
      </Themed.p>
    </div>
  )
}

export default Caption
