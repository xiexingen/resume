import React,{ useState } from 'react';
import Viewer from 'react-viewer';

export type ImageViewerProps = {
  images: any[],
  openIndex: number,
  onClose:() => void
}

const ImageViewer: React.FC<ImageViewerProps> = (props) => {

  const [currentIndex, setCurrentIndex] =useState(props.openIndex);

  const handleChangeIndex = (_:any, index:number) => {
    setCurrentIndex(index);
  };

  return (
    <Viewer
      rotatable={false}
      scalable={false}
      zoomSpeed={0.1}
      visible={true}
      images={props.images}
      activeIndex={currentIndex}
      onChange={handleChangeIndex}
      // onClickPrev={this.gotoPrevious}
      // onClickNext={this.gotoNext}
      onClose={props.onClose}
    />
  )
};

ImageViewer.defaultProps = {
  images: [],
  openIndex:0,
}

export default ImageViewer