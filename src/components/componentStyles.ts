import styled from "styled-components";
import { IGalleryGridItemImageInfoProps } from "../datastructures/galleryInterfaces";

export const GalleryGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
`;

export const GalleryGridItem = styled.div`
display: flex;
justify-content: center;
padding: .5rem;

`;


export const GalleryGridItemImage  = styled.img`
width : 100%;
transform: scale(1);
transition: all 0.3s ease-in-out;
&:hover {
    cursor: pointer;
    transform: scale(1.01);
  };
src = ${props =>  props.src};

`;

export const GalleryGridItemImageInfo  = styled.div<IGalleryGridItemImageInfoProps>`
width : 100%;
background-size: 100% 100%;
background-image: url(${(props)=>props.backgroundimageurl});  

transition: all 0.3s ease-in-out;
text-align:center;
color:gray;
&:hover {
    cursor: pointer;
  };
`;