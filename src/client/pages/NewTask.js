import React from 'react';

const styles = {
  wrapper: {
    padding: '30px',
  },
};

class NewTask extends React.Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        Create a new Task
      </div>
    );
  }
}

export default NewTask;
