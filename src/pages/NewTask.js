import React from 'react';
import StyleSheet from 'react-style';

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
});

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
