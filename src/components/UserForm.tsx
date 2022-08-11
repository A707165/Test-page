import React, { useState } from 'react';
import {useRef, useEffect} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, TextField } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import AvatarEdit from './Avatar';
import {ionSave} from '../App'
//import {iRenderedForm} from './RenderedForm'

interface iUserForm {
onSave : ({name,surname,why,education,core,relevant,role,croppedArea,image}: ionSave) => void

}

const UserForm = ({onSave}:iUserForm) =>{

const [name,setName] = useState<any>('');
const [surname,setSurname] = useState<any>('');
const [why,setWhy] = useState<String>('');
const [education,setEducation] = useState<String>('');
const [core,setCore] = useState<String>('');
const [relevant,setRelevant] = useState<String>('');
const [role,setRole] = useState<String>('');
const [croppedArea,setcroppedArea] = useState<any>();
const [image, setImage] = useState<any>();

const getAvatar = (croppedArea: any, image: any ) =>{

setcroppedArea(croppedArea)
setImage(image)

}



return(
    <Container component="main" maxWidth={false} sx={{ mb: 4 }}>
   
    <Grid container spacing={2} sx={{ 
      mb: 2, 
      mt: 2,
      
      
      }}>
        <Grid container position={'relative'} item xs={8} spacing={2} sx={{ mb: 2 ,mt:2 }}> 
          <Grid item xs={12} >
          <TextField fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} id="name" label="Name" variant="outlined" />
          <TextField fullWidth margin="normal" value={surname} onChange={e => setSurname(e.target.value)} id="surname" label="Surname" variant="outlined" />
          <TextField fullWidth margin="normal" value={role} onChange={e => setRole(e.target.value)} id="role" label="Role" variant="outlined" />
          </Grid>
          <Grid item xs={6} >
          <Switch defaultChecked />
          <TextField
          fullWidth 
          value={why}
          id="why"
          onChange={e => setWhy(e.target.value)}
          label="Why You"
          placeholder="Tell something about yourself"
          multiline
          />
          </Grid>
          <Grid item xs={6} >
          <TextField
          fullWidth 
          value={core}
          id="core"
          onChange={e => setCore(e.target.value)}
          label="Your core competencies "
          placeholder="Tell something about yourself"
          multiline
          />
          </Grid>
          
          <Grid item xs={6} >
          <TextField
          fullWidth 
          value={education}
          id="education"
          onChange={e => setEducation(e.target.value)}
          label="Your education"
          placeholder="Tell something about yourself"
          multiline
          />
         
          </Grid>
         
          <Grid item xs={6} >
          <TextField
          fullWidth 
          value={relevant}
          id="relevant"
          onChange={e => setRelevant(e.target.value)}
          label="Your relevant experiance "
          placeholder="Tell something about yourself"
          multiline
          />
          </Grid>
          
          
        </Grid>
        <Grid position={'relative'} item xs={4}>
          <AvatarEdit getAvatar={getAvatar}/>
        </Grid>
        <Grid position={'relative'} item xl={4}>
          <Button 
          variant="outlined"
          onClick={()=> onSave({name,surname,why,education,core,relevant,role,croppedArea,image})}
          >
            Save
          </Button>

        </Grid>
        
    </Grid>
   
   
  </Container>
)   

}


export default UserForm