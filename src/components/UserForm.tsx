import React, { useState } from 'react';
import Container from '@mui/material/Container';
import {FormControlLabel, Grid, TextField } from '@mui/material';

import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import AvatarEdit from './Avatar';
import {ionSave} from '../App'

interface iUserForm {
onSave : ({name,surname,why,education,core,relevant,role,fieldsToInclude,croppedArea,image}: ionSave) => void
}

const UserForm = ({onSave}:iUserForm) =>{

const [name,setName] = useState<any>('');
const [surname,setSurname] = useState<any>('');
const [why,setWhy] = useState<string>('');
const [education,setEducation] = useState<string>('');
const [core,setCore] = useState<string>('');
const [relevant,setRelevant] = useState<string>('');
const [role,setRole] = useState<string>('');
const [softSkills,setSoftSkills] = useState<string>('');
const [languages,setLanguages] = useState<string>('');

const [includeWhy,setIncludeWhy] = useState<boolean>(true);
const [includeCore,setIncludeCore] = useState<boolean>(true);
const [includeEducation,setIncludeEducation] = useState<boolean>(true);
const [includeRelevant,setIncludeRelevant] = useState<boolean>(true);
const [includeSoftSkills,setIncludeSoftSkills] = useState<boolean>(true);
const [includeLanguages,setIncludeLanguages] = useState<boolean>(true);

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
          <Grid item xs={12} sx={{ mb: 0 ,mt:0 }}>
          <TextField fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} id="name" label="Name" variant="outlined" />
          <TextField fullWidth margin="normal" value={surname} onChange={e => setSurname(e.target.value)} id="surname" label="Surname" variant="outlined" />
          <TextField fullWidth margin="normal" value={role} onChange={e => setRole(e.target.value)} id="role" label="Role" variant="outlined" />
          </Grid>
          <Grid item xs={6} sx={{ mb: 0 ,mt:0 }}>
          <FormControlLabel control={<Switch id='includeWhy' checked={includeWhy} onChange={() => setIncludeWhy(!includeWhy) }/>} label="Include in PDF" />
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
          <FormControlLabel control={<Switch id='includeCore' checked={includeCore} onChange={() => setIncludeCore(!includeCore) }/>} label="Include in PDF" />
          <TextField
          fullWidth 
          value={core}
          id="core"
          onChange={e => setCore(e.target.value)}
          label="Your core competencies "
          placeholder="What are your core competencies?"
          multiline
          />
          </Grid>
          
          <Grid item xs={6} >
          <FormControlLabel control={<Switch id='includeEducation' checked={includeEducation} onChange={() => setIncludeEducation(!includeEducation)}/>} label="Include in PDF" />
          <TextField
          fullWidth 
          value={education}
          id="education"
          onChange={e => setEducation(e.target.value)}
          label="Your education"
          placeholder="What is your education?"
          multiline
          />
         
          </Grid>
         
          <Grid item xs={6} >
          <FormControlLabel control={<Switch id='includeRelevant' checked={includeRelevant} onChange={() => setIncludeRelevant(!includeRelevant)}/>} label="Include in PDF" />
          <TextField
          fullWidth 
          value={relevant}
          id="relevant"
          onChange={e => setRelevant(e.target.value)}
          label="Your relevant experiance "
          placeholder="What is your experiance relevant to project?"
          multiline
          />
          </Grid>
          <Grid item xs={6} >
          <FormControlLabel control={<Switch id='includeSoftSkills' checked={includeSoftSkills} onChange={() => setIncludeSoftSkills(!includeSoftSkills)}/>} label="Include in PDF" />
          <TextField
          fullWidth 
          value={softSkills}
          id="relevant"
          onChange={e => setSoftSkills(e.target.value)}
          label="Your soft skills "
          placeholder="What are your softskills?"
          multiline
          />
          </Grid>
          <Grid item xs={6} >
          <FormControlLabel control={<Switch id='includeLanguages' checked={includeLanguages} onChange={() => setIncludeLanguages(!includeLanguages)}/>} label="Include in PDF" />
          <TextField
          fullWidth 
          value={languages}
          id="relevant"
          onChange={e => setLanguages(e.target.value)}
          label="Languages that you know"
          placeholder="What languages do you know?"
          multiline
          />
          </Grid>
          <Grid position={'relative'} item xs={12}>
          <Button 
          fullWidth
          variant="contained"
          onClick={()=> onSave({name,surname,why,education,core,relevant,role,softSkills,languages,fieldsToInclude:[includeWhy,includeCore,includeEducation,includeRelevant,includeSoftSkills,includeLanguages],croppedArea,image})}
          >
            Display preview
          </Button>

        </Grid>  
          
        </Grid>
        <Grid position={'relative'} item xs={4}>
          <AvatarEdit getAvatar={getAvatar}/>
        </Grid>
        
        
    </Grid>
   
   
  </Container>
)   

}


export default UserForm