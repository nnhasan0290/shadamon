import React, { useState } from 'react';
import { Image } from 'antd';

const ImagePreviewSlider = ({imgArr}:any) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Image
        preview={{ visible: false }}
        width={80}
        height={40}
        src={`${process.env.NEXT_PUBLIC_HOST}/img/${imgArr[0]?.img}`}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
            {
                imgArr.map((each:any) => (
                    <Image src={`${process.env.NEXT_PUBLIC_HOST}/img/${each.img}`}/>
                ))
            }
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ImagePreviewSlider;