import React from 'react';

import { bind } from '@/decorators';

export default class Test extends React.PureComponent {
  state = {
    val: '',
  };

  @bind
  handleChange({ target: { name: key, value } }) {
    this.setState({ [key]: value });
  }

  render() {
    const { val } = this.state;

    return (
      <div>
        <input
          name="val"
          type="text"
          value={val}
          onChange={this.handleChange}
          className="border border-gray-300 py-2 px-4 focus:bg-gray-100 outline-none"
        />
      </div>
    );
  }
}
