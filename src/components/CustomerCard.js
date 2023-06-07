import { React, useState } from 'react'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from './ModalConfirm'
import { Handshake } from '@mui/icons-material'

const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer
}) => {


    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
        handleToggleOpenModal()
        onRemoveCustomer(id)
    
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="user" src={avatar}>

                        </Avatar>
                    }
                    title={`${name} ${lastname}`}
                    subheader={email}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="edit client">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete client" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={() => handleConfirmModal(id)}
                title="Are you sure to delete this registration?"
                message="When agreed, will be not possible to revert this action"
            />
        </>
    )
}



export default CustomerCard