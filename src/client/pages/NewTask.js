import React from 'react';
import CategoryList from './components/categoryList';

const styles = {
  wrapper: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 10px',
    flex: '1',
    borderTop: '2px solid #E0E0E0',
    fontSize: '120%',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    maxWidth: '100%',
    flexWrap: 'wrap',

  },
  menuItem: {
    display: 'flex',
    width: '33.3%',
    minWidth: '180px',
    height: '200px',
    backgroundColor: 'white',
    border: '2px solid #E0E0E0',
    boxSizing: 'border-box',
    flexGrow: 1,
    justifyContent: 'center',    
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '16px',
    
  },
};

const NewTask = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.section}>
        <span>Välj kategori</span>
      </div>

      <CategoryList />

      <div style={styles.section}>
        <span>Valj kategori</span>
      </div>
    </div>
  );
};

export default NewTask;
