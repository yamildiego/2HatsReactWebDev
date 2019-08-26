import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Search from './Components/Search/Search';
import DatePicker from './Components/DatePicker/DatePicker';
import BasicInformation from './Components/BasicInformation/BasicInformation';
import Goal from './Components/Goal/Goal';
import PersonalPanel from './Components/PersonalPanel/PersonalPanel';
import ListFood from './Components/ListFood/ListFood';
import ModalContainer from './Components/Modal/ModalContainer';
import Modal from './Components/Modal/Modal';
import * as actionsGeneral from './actions/general';
import * as actionsPersonalData from './actions/personalData';
import data from './data.json';

class App extends Component {
  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateWindowDimensions();
    this.props.dispatch(actionsPersonalData.personalDataSet(data))
  }

  componentWillUnmount = () => window.removeEventListener("resize", this.updateWindowDimensions);
  updateWindowDimensions = () => this.props.dispatch(actionsGeneral.mobileSet(window.innerWidth < 768))

  render() {
    return (
      <div onKeyDown={this.handleOnKeyPress}>
        <Search />
        {
          this.props.isMobile &&
          <React.Fragment>
            <BasicInformation />
            <DatePicker />
            <Goal />
            <ListFood />
          </React.Fragment>
        }
        {
          !this.props.isMobile &&
          <Container fluid>
            <Row>
              <PersonalPanel />
              <ListFood />
            </Row>
          </Container>
        }
        <div onClick={this.openModal}>adadasdadca</div>
        {
          this.props.searchVisible &&
          <ModalContainer>
            <Modal closeModal={this.closeModal}>
              vasa
              <div onClick={this.closeModal}>CLOSE</div>
            </Modal>
          </ModalContainer>
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isMobile: state.general.isMobile,
    searchVisible: state.general.searchVisible
  }
}

export default connect(mapStateToProps)(App);