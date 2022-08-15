import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../styles/RenderedForm.css'
import portriatPlaceholder from './portraitPlaceholder.png'
import { Button, ButtonBase, Container, Grid, Stack, styled, Typography } from '@mui/material';
import { ionSave } from '../App';
import Tile from './Tile';

/*export interface iRenderedForm{
    name: String,
    surname: String
    why:String

    croppedArea: any
}*/
import DomToImage from 'dom-to-image';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Scale } from '@mui/icons-material';


const CROP_AREA_ASPECT = 2 / 2;

const generatePDF = () =>{


  const domElement = document.getElementById("OnePagerResult")!;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    userUnit: 300,
    hotfixes: ["px_scaling"],
    format:  'a4'
   
    
    
  });
  let width = pdf.internal.pageSize.getWidth();
  let height = pdf.internal.pageSize.getHeight();
  let options = {
    quality: 1,
    width: 1122*4,
    height: 793*4
};

  DomToImage.toJpeg(domElement, options).then(function (dataUrl) {


   // pdf.addImage(dataUrl, 'JPEG', 0, 0,1122*4,793*4);
  //  pdf.save(`${new Date().toISOString()}.pdf`);
  
});

    html2canvas(domElement, {
      windowHeight:793,
      windowWidth:1122,
      height:793,
      width:1122,
      scale: 1,
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");

      console.log(width,height)
      pdf.addImage(imgData, 'JPEG', 0, 0,1122,793,'SLOW');
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  }




const Output = ({croppedArea,image }: any) => {
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

//console.log(image)
console.log(croppedArea)
  return (
    <div
      className="output"
      style={{ paddingBottom: `${100 / CROP_AREA_ASPECT}%`, borderRadius: "50%"}}
    >
      <img src={image} alt="" style={imageStyle} />
    </div>
  );
};



const RenderedForm = ({name,surname,why,education,core,relevant,role,softSkills,languages,fieldsToInclude,croppedArea,image} : ionSave) => {
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(9, 9, 9)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'white',
    overflowWrap: 'break-word',
    fontSize:'10px'
    
}));
    
console.log(fieldsToInclude)


return(
<Grid container item xs={8} >
<Paper
id={'OnePagerResult'}
sx={{
    p: 2,
    borderRadius:0,
    border: 0,
    margin: 'auto',
    maxWidth: 1122,
    minWidth: 1122,
    maxHeight: 793,
    minHeight: 793,
    flexGrow: 1,
    backgroundColor: (theme) =>'rgb(9, 9, 9)',
    color: 'white',
       
}}
>
        <Grid  spacing={2} rowSpacing={2}   container>
            <Grid item xs={2} >
                <ButtonBase sx={{ width: 150, height: 150 }}>
                    {<Output croppedArea={croppedArea}  image={image} cropShape='round'/>}
                </ButtonBase>
            </Grid>  
            <Grid item xs={4} container direction={'column'}>
              <Typography  variant='h4'>{name}</Typography>  
              <Typography  variant='h4'>{surname}</Typography>
              <Typography color='rgb(5, 150, 255)' variant='h5'>{role}</Typography>
            </Grid>
            <Grid item  xs={2} className="display-linebreak" > 
           
            <Tile title={'Soft Skills'} display={fieldsToInclude[4]} content={softSkills}></Tile>
            
            </Grid>
            <Grid item  xs={2}  className="display-linebreak" > 

            <Tile title={'Languages'} display={fieldsToInclude[5]} content={languages}></Tile>
            
            </Grid>


            <Grid item  xs={6}  zeroMinWidth  className="display-linebreak" >
            <Stack spacing={2}>
            
              <Tile title={'Why '+name+'?'} display={fieldsToInclude[0]} content={why}></Tile>

              <Tile title={'Education, Trainings/Certification'} display={fieldsToInclude[1]} content={education}></Tile>
              
              
           
            </Stack>
            </Grid>
            <Grid item  xs={6}  className="display-linebreak" > 
            <Stack spacing={2}>
            <Tile title={'Core competencies/Technologies'} display={fieldsToInclude[2]} content={core}></Tile>
            <Tile title={'Relevant project experience'} display={fieldsToInclude[3]} content={relevant}></Tile>
            
            </Stack>
            </Grid>
            
        </Grid>
   
</Paper>
<Button 
  fullWidth
  variant="contained"
  onClick={()=> generatePDF()}
  sx={{mt:4}}
>
   DOWNLOAD PDF
</Button>
</Grid>
);


}

export default RenderedForm