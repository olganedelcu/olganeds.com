import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { Card, Text, Heading, Box } from 'rebass'
import theme from '../theme/config'

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
const element =<Welcome name="Olga"/>;
