import {

    Container,
    Typography,
    Button

} from "@mui/material";

export default function Home() {

    return (

        <Container sx={{ mt: 5 }}>

            <Typography
                variant="h3"
                gutterBottom
            >

                Food Delivery Platform
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
            >

                Order food online from your favorite restaurants.
            </Typography>

            <Button
                variant="contained"
            >

                Order Now
            </Button>

        </Container>
    );
}