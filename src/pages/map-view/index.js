import React from 'react';

export default class MapView extends React.Component {

  state = {
    
  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}