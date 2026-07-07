import {

    Container,
    Paper,
    Typography,
    TextField,
    Button

} from "@mui/material";

export default function Register() {

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
                    Register
                </Typography>

                <TextField
                    fullWidth
                    label="Full Name"
                    margin="normal"
                />

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
                    Register
                </Button>

            </Paper>

        </Container>
    );
}