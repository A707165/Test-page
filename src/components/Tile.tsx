import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../styles/RenderedForm.css'
import ein from './einstein.jpg'
import { Button, ButtonBase, Container, Grid, Stack, styled, Typography } from '@mui/material';

interface iTile{
    title: any,
    content: any 

}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(15, 15, 15)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'white',
    overflowWrap: 'break-word',
    fontSize:'10px'
    
}));

const Tile = ({content,title}: iTile) =>{




return(

    <Item>
    <Typography color='rgb(5, 150, 255)' variant='h5'>{title}?</Typography> 
    <Item> {content} </Item>
    </Item>
 
)
}


export default Tile