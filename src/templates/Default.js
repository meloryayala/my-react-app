import React from "react"
import Container from '@mui/material/Container'

import Header from "../partials/Header"

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container sx={{ margin: '20px 0' }}>
                {children}
            </Container>
        </>
    )
}

export default Default