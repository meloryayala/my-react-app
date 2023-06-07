import { React, useState } from "react"
import axios from "axios"

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Toasty from "../../components/Toasty"
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'





const AddCustomers = () => {

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState({
        open: false,
        severity: 'error',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },

        })
    }

    const handleAddCustomerButton = () => {
        setLoading(true)
        let hasError = false

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true

            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Write the field name correctly!'
            }
        }

        if (!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Write the field job correctly!'
            }

        }

        if (hasError) {
            return (
                setForm(newFormState),
                setOpenToasty({
                    open: true,
                    severity: 'error',
                    message: 'Not all the fields are filled, please write'
                }),
                setLoading(false)
            )
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setLoading(false)
            setOpenToasty({
                open: true,
                severity: 'success',
                message: 'Customer added correctly',
            })

        })

    }

    return (
        <>
            <Typography variant="h3">
                Add customers
            </Typography>
            <div>
                <TextField
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    id="outlined-basic"
                    label="Your name"
                    name="name" variant="standard"
                    value={form.name.value}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <TextField
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    id="outlined-basic"
                    label="Your role"
                    name="job"
                    variant="standard"
                    value={form.job.value}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <div sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant="contained"
                        onClick={handleAddCustomerButton}
                        disabled={loading}
                        sx={{ marginTop: '20px' }} >
                        {loading ? 'Loading...' : 'Add customer'}
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </div>
                <Toasty
                    open={openToasty.open}
                    severity={openToasty.severity}
                    message={openToasty.message}
                    onCLose={() => setOpenToasty(false)}
                />
            </div>
        </>
    )

}





export default AddCustomers