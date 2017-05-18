import React from 'react';

const CategoryItem = React.createClass({

    getInitialState() {
        return ({
            selected: false,
            mouseOver: false,            
        })
    },

    itemClicked() {
        this.setState({
            selected: !this.state.selected,
        })
    },

    mouseOver() {
        this.setState({
            mouseOver: true,
        })        
    },

    mouseOut() {
        this.setState({
            mouseOver: false,
        })        
    },


    render() {
        const styles = {
            menuItem: {
                display: 'flex',
                width: '33.3%',
                minWidth: '180px',
                height: '200px',
                backgroundColor: this.state.selected ? '#EB9321' : 'white',
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
            icon: {
                width: this.state.mouseOver ? '120px' : '100px',
            }
        }

        return (
            <div style={styles.menuItem} onClick={this.itemClicked} onMouseEnter={this.mouseOver} onMouseOut={this.mouseOut} >
                <img style={styles.icon} src={'public/img/' + this.props.icon + ".svg"} alt=""  onMouseEnter={this.mouseOver} />
                <span style={styles.menuTitle} onMouseEnter={this.mouseOver} >{this.props.name}</span>
            </div>
        );
    }
})

export default CategoryItem;
