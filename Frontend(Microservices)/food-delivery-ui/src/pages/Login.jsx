import {

    Container,
    TextField,
    Typography,
    Button,
    Paper

} from "@mui/material";

export default function Login() {

    return (

        <Container maxWidth="sm">

            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    mt: 5
                }}
            >

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Login
                </Typography>

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                />

                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    margin="normal"
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>

            </Paper>

        </Container>
    );
}