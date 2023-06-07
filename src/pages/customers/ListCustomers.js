import { useEffect, useState } from "react"
import axios from 'axios'
import CustomerCard from "../../components/CustomerCard"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'




const ListCustomers = () => {
    const [customers, setCustomers] = useState([])
    console.log(customers)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((response) => {
                console.log(response)
                const { data } = response.data

                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {

                const newCustomerState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomerState)
            })
    }

    return (
        <>
            <Typography variant="h3">
                Customers list
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '10px' }} >
                {
                    customers.map(customer => (
                        <Grid item xs={12} md={4} >
                            <CustomerCard
                                id={customer.id}
                                name={customer.first_name}
                                lastname={customer.last_name}
                                email={customer.email}
                                avatar={customer.avatar}
                                onRemoveCustomer={handleRemoveCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default ListCustomers