import React from "react"
import Container from '@mui/material/Container'

const TemplateClean = ({ children }) => {
    return (
        <>
            <Container sx={{ margin: '20px auto' }}>
                {children}
            </Container>
        </>
    )
}

export default TemplateClean