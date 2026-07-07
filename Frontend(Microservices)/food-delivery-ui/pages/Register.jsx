import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { useState } from "react";

import { registerUser }
from "../api/authApi";

export default function Register() {

    const [formData, setFormData] =
        useState({

            fullName: "",
            email: "",
            password: "",
            role: "ROLE_CUSTOMER"
        });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {

        try {

            const response =
                await registerUser(formData);

            alert(
                "Registration Success"
            );

            console.log(response);

        } catch (error) {

            console.error(error);

            alert(
                "Registration Failed"
            );
        }
    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ p: 4, mt: 5 }}>

                <Typography
                    variant="h4"
                    gutterBottom>

                    Register
                </Typography>

                <TextField
                    fullWidth
                    name="fullName"
                    label="Full Name"
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    type="password"
                    name="password"
                    label="Password"
                    margin="normal"
                    onChange={handleChange}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleSubmit}
                >
                    Register
                </Button>

            </Paper>

        </Container>
    );
}