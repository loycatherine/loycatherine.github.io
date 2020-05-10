import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Modal } from 'semantic-ui-react'
import './modal.css';

export default class DimmerTrigger2 extends Component {
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
            Stratly
        </Header>
        <Button inverted color='blue' onClick={this.show('blurring')}>
            Learn More
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Web Development Project</Modal.Header>
          <Modal.Content image scrolling>
            <Image
              wrapped
              src='/images/portfolio/stratly.jpg'
              size="big"
            />
            <Modal.Description>
                <Header>Stratly</Header>
                <p>
                Created a web application, that allows team sport players to strategize their game plays. 
                </p>
                <p>
                Used HTML, CSS AND React.js to build the application. 
                </p>
                <p>
                Achieved Vostok (Beginner) level. 
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
        animated = "small fade"
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src="/images/portfolio/stratly.jpg"
      /> 
    )
  }
}