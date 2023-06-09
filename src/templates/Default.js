import React from "react"
import Container from '@mui/material/Container'

import Header from "../partials/Header"
import useAuth from "../state/auth"

const TemplateDefault = ({ children }) => {

    const { user } = useAuth()

    return (
        <>
            <Header user={user}/>
            <Container sx={{ margin: '20px auto' }}>
                {children}
            </Container>
        </>
    )
}

export default TemplateDefault