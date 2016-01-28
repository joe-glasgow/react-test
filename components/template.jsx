import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'blah'
    }
  }
  render() {
    return <div className="container">
      <Header urls={['Home', 'About', 'Projects']}/>
        <section className="content">{this.props.children}</section>
      <Footer urls={['Home', 'About', 'Projects']} corporateUrls={['Careers', 'Corporate', 'Group']}/>
    </div>
  }
}

export default Template;
