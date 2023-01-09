import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
//import { makeStyles } from '@material-ui/core/styles'
import { makeStyles, ThemeProvider } from '@mui/styles'
//import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'

//const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//     root: {
//         // some CSS that accesses the theme
//     }
// });

//renders CSS whenn the page renders 
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    }
}))

function Chat (){
    //const classes = useStyles()
    return(
        <div>
                <Paper 
                style={{ textAlign: "center", margin:"50px" }}
                >
                
                    <Typography 
                        varient="h5" 
                        component="h3"
                    >
                        This is a sheet of paper
                    </Typography>
                    <Typography component="p">
                        Paper
                    </Typography>
                </Paper>
         
          
         <h1>This is the chat component</h1>
        </div>
    )
}

export default Chat; 

