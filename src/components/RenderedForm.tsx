import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../styles/RenderedForm.css'
import ein from './einstein.jpg'
import { Button, ButtonBase, Container, Grid, Stack, styled, Typography } from '@mui/material';
import { ionSave } from '../App';

/*export interface iRenderedForm{
    name: String,
    surname: String
    why:String

    croppedArea: any
}*/
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const CROP_AREA_ASPECT = 2 / 2;

const generatePDF = () =>{


  const domElement = document.getElementById("OnePagerResult")!;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    userUnit: 300,
    hotfixes: ["px_scaling"]
    
  });
  let width = pdf.internal.pageSize.getWidth();
  let height = pdf.internal.pageSize.getHeight();

    html2canvas(domElement, {
      windowHeight:900,
      windowWidth:1500,
      height:793,
      width:1122
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      
     
      console.log(width,height)
      pdf.addImage(imgData, 'JPEG', 0, 0,1122,793);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  
}



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



const RenderedForm = ({name,surname,why,education,core,relevant,role,croppedArea} : ionSave) => {
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(15, 15, 15)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'white',
    overflowWrap: 'break-word',
    fontSize:'10px'
    
}));
    



return(
<Container maxWidth={false} >
<Paper
id={'OnePagerResult'}
sx={{
    p: 2,
    borderRadius:0,
    margin: 'auto',
    maxWidth: 1122,
    minWidth: 1122,
    maxHeight: 793,
    minHeight: 793,
    flexGrow: 1,
    backgroundColor: (theme) =>'rgb(15, 15, 15)',
    color: 'white',
       
}}
>
        <Grid  spacing={2} rowSpacing={2} container>
            <Grid item xs={2} >
                <ButtonBase sx={{ width: 150, height: 150 }}>
                    {<Output croppedArea={croppedArea}  cropShape='round'/>}
                </ButtonBase>
            </Grid>  
            <Grid item xs={10} container direction={'column'}>
              <Typography  variant='h4'>{name}</Typography>  
              <Typography  variant='h4'>{surname}</Typography>
              <Typography color='rgb(5, 150, 255)' variant='h5'>{role}</Typography>
            </Grid>
            <Grid item  xs={6}  zeroMinWidth className="display-linebreak" >
            <Stack spacing={2}>
            
              <Typography color='rgb(5, 150, 255)' variant='h5'>Why {name}?</Typography> 
              <Item> {why} </Item>
              <Typography color='rgb(5, 150, 255)' variant='h5'>Education,Trainings/Certification</Typography>    
              <Item>{education}</Item> 
              
           
            </Stack>
            </Grid>
            <Grid item  xs={6}  className="display-linebreak" > 
            <Stack spacing={2}>
               
              <Typography color='rgb(5, 150, 255)' variant='h5'>Core competencies/Technologies</Typography>
              <Item>{core}</Item>
              <Typography color='rgb(5, 150, 255)' variant='h5'>Relevant project Experiance</Typography>    
              <Item> {relevant}</Item>   
            
            </Stack>
            </Grid>
        </Grid>
   
</Paper>
<Button 
  variant="outlined"
  onClick={()=> generatePDF()}
>
    Genreate PDF
</Button>
</Container>
);


}

export default RenderedForm