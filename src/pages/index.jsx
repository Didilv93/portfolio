import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero/index';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerFixed: false,
    };
  }

  render() {
    const { node: hero } = this.props.data.hero.edges[0];

    return (
      <div>
          <Hero allPoints={hero.dataPoints} />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
query IndexPageQuery {
  hero: allDataJson(filter: { name: { eq: "hero" } }) {
    edges {
      node {
        name
        dataPoints {
          namePoint
          nameLine
          color
          translateFrom
          translateTo
          timeTransform
        }
      }
    }
  }
}
`;