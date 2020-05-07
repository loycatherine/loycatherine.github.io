import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Modal } from 'semantic-ui-react'
import './modal.css';

export default class DimmerTrigger1 extends Component {
  state = {open: false}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false, active: false })

  render() {
    const { active } = this.state
    const { open, dimmer } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
            Detecting Cyberbullying in Singapore Context
        </Header>
        <Button inverted color='blue' onClick={this.show('blurring')}>
            Learn More
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Machine Learning Project</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              src='/images/portfolio/machinelearning.png'
              size="massive"
            />
            <Modal.Description>
                <Header>Detecting Cyberbullying in Singapore Context</Header>
              <p>
                Created a Machine Learning project with 5 others.
              </p>
              <p>
              Detects cyber bullying comments using Python and Natural Language Processing models. 
              </p>
              <p>
              It was designed for social media sites and websites to prevent the widespread trend of cyberbullying.
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

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src="/images/portfolio/machinelearning.png"
      /> 
    )
  }
}