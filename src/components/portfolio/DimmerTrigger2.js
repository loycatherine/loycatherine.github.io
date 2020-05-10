import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Modal } from 'semantic-ui-react'
import './modal.css';

export default class DimmerTrigger2 extends Component {
  state = {open: false}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  goToGithub = () => {
    window.location.href="https://github.com/loycatherine/main";
  }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false, active: false })

  render() {
    const { active } = this.state
    const { open, dimmer } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
            Easy Travel
        </Header>
        <Button inverted color='blue' onClick={this.show('blurring')}>
            Learn More
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Software Engineering Project</Modal.Header>
          <Modal.Content image scrolling>
            <Image
              wrapped
              src='/images/portfolio/Ui.png'
              size="big"
            />
            <Modal.Description>
                <Header>Easy Travel</Header>
              <p >
              Created an all-in-one travel planning application with 4 others using Java and JavaFX for the GUI. 
              </p>
              <p>
              Used Object-Oriented Programming for this project. 
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='black' icon='code' size='big' onClick={this.goToGithub}/>
          </Modal.Actions>
        </Modal>
      </div>
    )

    return (
      <Dimmer.Dimmable
        className = "ease"
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        animation = "ease"
        src="/images/portfolio/Ui.png"
      /> 
    )
  }
}