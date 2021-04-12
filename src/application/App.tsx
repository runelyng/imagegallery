import React, { useEffect, useState } from 'react';
import { GalleryGrid, GalleryGridItem, GalleryGridItemImage, GalleryGridItemImageInfo } from '../components/componentStyles';
import { IGalleryItemProps, IImageData } from '../datastructures/galleryInterfaces';

function App() {
  const axios = require('axios');
  const [images, setImages] = useState<IImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showImageInfoForId, setShowImageInfoForId] = useState<string>();

  const clickImageAction = (id:string) => {
    if(showImageInfoForId !== id){
      setShowImageInfoForId(id);  
    }
    else{
      setShowImageInfoForId("");
    }
  }

  useEffect(() => {
    if(isLoading){
      axios.get('https://picsum.photos/v2/list/').then((respone:any)=> {
        setIsLoading(false);
        setImages(respone.data.slice(0, 27) as IImageData[]);
      })
      .catch((error:any)=>{
        console.log(error);
      })
    }
  });
  
  return(
    <>
      {isLoading && <div>Is Loading</div>}
      {!isLoading && 
      <>
      {
        <>
          <GalleryGrid>
            {images.map(image => (
              <GalleryItem key={image.id} imageInfo={image} toggleShowInfo={clickImageAction} showInfo={(image.id===showImageInfoForId)}/>
            ))}
          </GalleryGrid>
        </>
      }
      </>
      }
    </>
  );
}

function GalleryItem(props:IGalleryItemProps)
{
  const {showInfo, toggleShowInfo, imageInfo} = props;
  const {id, author} = imageInfo;
  const imageurl = "https://picsum.photos/id/"+id+"/1000";
  return (
    <GalleryGridItem key={id}>
    {
      !showInfo &&
      <GalleryGridItemImage onClick={()=> toggleShowInfo(id)} src={imageurl}/>
    }
    {
      showInfo &&
      <GalleryGridItemImageInfo backgroundimageurl={imageurl} onClick={()=> props.toggleShowInfo(id)} >
        <label title="Author">{author} /</label>
        <label title="Id">/ {id}</label>
        </GalleryGridItemImageInfo>
    }
    </GalleryGridItem>
  );
}

export default App ;