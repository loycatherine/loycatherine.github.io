import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleHidden = () => (
  <Reveal animated='small fade'>
    <Reveal.Content visible>
      <Image src='/images/portfolio/machinelearning.png' size='medium' />
    </Reveal.Content>
    <Reveal.Content hidden>
      {/* <Image src='https://react.semantic-ui.com/images/avatar/large/ade.jpg' size='small' /> */}
      <Image src='/images/portfolio/Ui.png' size='medium' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleHidden