import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";



const Main = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={5} textAlign="center">
                    <Grid item xs={3}>
                        아무거나1
                    </Grid>
                    <Grid item xs={3}>
                        아무거나2
                    </Grid>
                    <Grid item xs={3}>
                        아무거나3
                    </Grid>
                    <Grid item xs={3}>
                        아무거나4
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Main;