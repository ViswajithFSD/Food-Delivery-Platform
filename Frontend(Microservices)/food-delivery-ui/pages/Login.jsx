import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { useState }
from "react";

import { loginUser }
from "../api/authApi";

import { useDispatch }
from "react-redux";

import {
    loginSuccess
}
from "../redux/auth/authSlice";

export default function Login() {

    const dispatch =
        useDispatch();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin =
        async () => {

            try {

                const response =
                    await loginUser({

                        email,
                        password
                    });

                localStorage.setItem(
                    "token",
                    response.accessToken
                );

                localStorage.setItem(
                    "role",
                    response.role
                );

                dispatch(
                    loginSuccess({

                        token:
                            response.accessToken,

                        role:
                            response.role
                    })
                );

                alert(
                    "Login Success"
                );

            } catch {

                alert(
                    "Invalid Credentials"
                );
            }
        };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ p: 4, mt: 5 }}>

                <Typography
                    variant="h4"
                    gutterBottom>

                    Login
                </Typography>

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    onChange={(e) =>
                        setEmail(
                            e.target.value)}
                />

                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    margin="normal"
                    onChange={(e) =>
                        setPassword(
                            e.target.value)}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>

            </Paper>

        </Container>
    );
}