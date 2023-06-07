import { React } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Toasty = ({ open, severity, message, onCLose }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        onCLose()
    }

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MuiAlert elevation={6} variant="filled" severity={severity}>
                    {message}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}


export default Toasty