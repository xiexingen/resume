import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'react-viewer';

class Index extends PureComponent<any,any> {
    constructor(props){
        super(props);
        this.state={
            currentIndex:props.currentIndex
        }
    }

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        isOpen: PropTypes.bool.isRequired,
        currentIndex:PropTypes.number
    };

    static defaultProps = {
        images:[],
        currentIndex:0,
        isOpen:true
    };

    gotoPrevious=()=>{
        const {currentIndex}=this.state;
        if(currentIndex>0){
            this.setState({
                currentIndex:currentIndex-1
            })
        }
    }

    gotoNext=()=>{
        const {currentIndex}=this.state;
        if(currentIndex<this.props.images.length-1){
            this.setState({
                currentIndex:currentIndex+1
            })
        }
    }

    handleChangeIndex=(_,index)=>{
        this.setState({
            currentIndex:index
        })
    }

    handleClose=()=>{
        const {onClose}=this.props;
        onClose&&onClose();
    }

    render() {
        const {images,isOpen}=this.props;
        const {currentIndex}=this.state;        
        return (
            <Viewer
                rotatable={false}
                scalable={false}
                zoomSpeed={0.1}
                visible={isOpen} 
                images={images}
                activeIndex={currentIndex}
                onChange={this.handleChangeIndex}
                // onClickPrev={this.gotoPrevious}
                // onClickNext={this.gotoNext}
                onClose={this.handleClose}
            />
        );
    }
}

export default Index;
