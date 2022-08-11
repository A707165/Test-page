
import React, { useState } from 'react';
import {useRef, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import UserForm from './components/UserForm';
import RenderedForm from './components/RenderedForm';
import { PDFViewer } from '@react-pdf/renderer';
export interface ionSave {
  name : String,
  surname : String 
  why: String
  education: String
  core:String
  relevant: String
  role: String
  croppedArea : any
  image: any
}
const App = () => {


  const theme = createTheme();
  const [name,setName] = useState<String>('');
  const [surname,setSurname] = useState<String>('');
  const [why,setWhy] = useState<String>('');
  const [education,setEducation] = useState<String>('');
  const [core,setCore] = useState<String>('');
  const [relevant,setRelevant] = useState<String>('');
  const [role,setRole] = useState<String>('');
  const [croppedArea,setcroppedArea] = useState<any>('');
  const [image, setImage] = useState<any>();
  
  const onSave = ({name,surname,why,education,core,relevant,role,croppedArea,image}: ionSave) =>{

  setName(name);
  setSurname(surname);
  setWhy(why);
  setEducation(education);
  setCore(core);
  setRelevant(relevant);
  setRole(role);
  setcroppedArea(croppedArea);
  setImage(image);
  console.log(image)
  }




  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Atos One Pager Generator
        </Typography>
      </Toolbar>
    </AppBar>

    <Container component="main" maxWidth={false} sx={{ mb: 4 }}>
    <UserForm onSave={onSave}/>

   
    <RenderedForm name={name} surname={surname} why={why} education={education} core={core} relevant={relevant} role={role} croppedArea={croppedArea} image={image} />  
    
    </Container>
    
  </ThemeProvider>

  );
}

export default App;
