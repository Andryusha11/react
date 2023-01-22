import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: 'online',
  };

  componentDidMount() {
    addEventListener('online', this.changeStatus);
    addEventListener('offline', this.changeStatus);
  }

  componentWillUnmount() {
    removeEventListener('online', this.changeStatus);
    removeEventListener('offline', this.changeStatus);
  }

  changeStatus = (e) => {
    this.setState({
      online: e.target.navigator.onLine ? 'online' : 'offline',
    });
  };

  render() {
    const style =
      this.state.online === 'online' ? 'status' : 'status status_offline';

    return (
      <div>
        <div className={style}>{this.state.online}</div>
      </div>
    );
  }
}

export default ConnectionStatus;
