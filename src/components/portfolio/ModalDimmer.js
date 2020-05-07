import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon} from 'semantic-ui-react';
import './modal.css';

class ModalDimmer extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Image className="img1" onClick={this.show('blurring')}
            src="/images/portfolio/machinelearning.png"
            size="medium"
        />
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              src='/images/portfolio/machinelearning.png'
              size="massive"
            />
            <Modal.Description>
              <p  className="modal-column">
                Created a Machine Learning project with 5 others that detects cyber bullying comments using Python and Natural Language Processing models. It was designed for social media sites and websites to prevent the widespread trend of cyberbullying.
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='black' icon='code' size='big' onClick={this.close}/>
            <Button color='black' onClick={this.close}>
                close
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalDimmer