import { useEffect, useState } from "react"
import axios from 'axios'
import CustomerCard from "../components/CustomerCard"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'




const Customers = () => {
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

    return (
        <>
            <Typography variant="h3">
                Customers
            </Typography>
            <Grid container spacing={2}>
                {
                    customers.map(customer => (
                        <Grid item xs={12} md={4} >
                            <CustomerCard
                                name={customer.first_name}
                                lastname={customer.last_name}
                                email={customer.email}
                                avatar={customer.avatar}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Customers