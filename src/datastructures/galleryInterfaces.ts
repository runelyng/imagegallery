interface IImageData
{
    author:string,
    download_url: string,
    height: number,
    id: string,
    url: string,
    width: number
    showInfo:boolean;
}

interface IGalleryItemProps
{
    imageInfo:IImageData;
    toggleShowInfo:(id:string)=>void;
    showInfo:boolean;
}

interface IGalleryGridItemImageInfoProps
{
    backgroundimageurl:string;
}


export type {IImageData, IGalleryItemProps, IGalleryGridItemImageInfoProps}