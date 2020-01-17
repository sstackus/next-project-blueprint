import React from 'react';

import { bind } from '@/decorators';

export default class Test extends React.PureComponent {
  state = {
    val: 'Test',
  };

  @bind
  handleChange({ target: { name: key, value } }) {
    this.setState({ [key]: value });
  }

  render() {
    const { val } = this.state;

    return (
      <div className="border border-gray-200 p-4">
        <input
          name="val"
          type="text"
          value={val}
          onChange={this.handleChange}
          className="border border-gray-300 py-2 px-3 focus:bg-gray-100 outline-none"
        />

        <p className="mt-4 mx-3">
          State:
          <br />
          <code className="bg-gray-100 border p-2 mt-2 inline-block">
            {JSON.stringify(this.state)}
          </code>
        </p>
      </div>
    );
  }
}
