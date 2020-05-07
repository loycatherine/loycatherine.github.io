import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const ModalScrollingContent = () => (
  <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='massive' src='/images/portfolio/machinelearning.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        <p>
        Created a Machine Learning project with 5 others that detects cyber bullying comments using Python and Natural Language Processing models. It was designed for social media sites and websites to prevent the widespread trend of cyberbullying.
        </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalScrollingContent