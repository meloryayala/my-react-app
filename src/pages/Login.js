import { React, useState } from "react";
import {
    TextField,
    Button,
    Typography,
} from "@mui/material";
import useAuth from "../state/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,

        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({
                logged: true,
                email: form.email
            })

            navigate("/")
        }, 4000)
    }

    return (
        <>
            <Typography variant="h3">
                Access restrict
            </Typography>
            <div>
                <TextField
                    onChange={handleInputChange}
                    label="E-mail"
                    name="email"
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    onChange={handleInputChange}
                    label="Password"
                    name="password"
                    variant="standard"
                    type="password"
                />
            </div>
            <div >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleFormSubmit}
                    sx={{ marginTop: '15px' }}
                >
                    {
                        isLoading ? 'Loading...' : 'Access'
                    }
                </Button>
            </div>

        </>
    );
};

export default Login;