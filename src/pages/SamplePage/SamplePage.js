import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from './actions'
import {
  SafeArea,
  ScrollContainer,
  Welcome,
  WelcomeIntro,
} from './styles'

const mapStateToProps = (state) => (state.sample)
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

class SamplePage extends Component {
  componentDidMount() {
    const { getData } = this.props

    getData()
  }

  render() {
    const { data } = this.props

    return (
      <SafeArea>
        <ScrollContainer>
          <Welcome>
            {
              data && (
                <WelcomeIntro>{data.title}</WelcomeIntro>
              )
            }
          </Welcome>
        </ScrollContainer>
      </SafeArea>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage)
