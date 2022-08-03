import React, { useState,useCallback } from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import Dropzone from 'react-dropzone'
import ein from './einstein.jpg'

import Slider from "@mui/material/Slider";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";
import { Box, Card, Grid } from '@mui/material'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import '../styles/Avatar.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CROP_AREA_ASPECT = 2 / 2;



const Output = ({croppedArea}: any) => {
  const scale = 100 / croppedArea.width;
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: "calc(100% + 0.5px)",
    height: "auto"
  };

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height,
    borderRadius: "50%"
    
  };

  return (
    <div
      className="output"
      style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%`, borderRadius: "50%"}}
    >
      <img src={ein} alt="" style={imageStyle} />
    </div>
  );
};

interface iAvatarEdit{
  getAvatar : (croppedArea: any) => void
}
const AvatarEdit = ({getAvatar}: iAvatarEdit) => {

  
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<any>(null);

  


  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );
  
  return (
   
  <Grid container spacing={2} sx={{ mb: 4 , mt: 4 }}>
    <Grid position={'relative'} item xs={12}>
    <div className="App">
      <div className="cropper">
        <Cropper
          image={ein}
          crop={crop}
          zoom={zoom}
          aspect={CROP_AREA_ASPECT}
          onCropComplete={
            (croppedArea) => {
              setCroppedArea(croppedArea)
              getAvatar({croppedArea})
            }
          }
          cropShape="round"
          onCropChange={setCrop}
          //onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        </div>
        </div>
        </Grid>
   <Grid position={'relative'} item xs={12}>
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(Number(zoom))}
          classes={{ root: "slider" }}
        />
     
        </Grid>

       

        
  </Grid>
  );



}
export default AvatarEdit