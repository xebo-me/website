/* eslint-disable camelcase */
import React, { useState, useReducer } from 'react';

import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { emailValid, createSubmission } from '@/functions';

type State = {
    email: string;
    givenName: string;
    familyName: string;
    enquiry: string;
    errors: {
        email?: string;
    };
}

type Action = {
    [key: string]: string;
}

const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

const reducer = (state: State, action: Action): State => {
    let error

    switch (action.type) {
        case 'email':
            if (!emailRegex.test(action.value.toLowerCase())) {
                error = "Please enter a valid email address";
            }
            return { ...state, email: action.value, errors: { ...state.errors, email: error } };
        case 'givenName':
            return { ...state, givenName: action.value };
        case 'familyName':
            return { ...state, familyName: action.value };
        case 'enquiry':
            return { ...state, enquiry: action.value };
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const init = {
    email: "",
    givenName: "",
    familyName: "",
    enquiry: "",
    errors: {}
};

const Contact = () => {
    const [state, dispatch] = useReducer(reducer, init);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();
    const formCheck = emailValid(state);

    const handleSubmit = () => {
        setSubmitting(true);

        const data = {
            first_name: state.givenName,
            last_name: state.familyName,
            email: state.email,
            custom_fields: {
                w1_T: state.enquiry
            }
        };

        const url = `/.netlify/functions/contact`;
        createSubmission({ url, data, setSubmitting, setSubmitted });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: name, value: value });
    }

    return (
        <Container sx={{ my: 10 }} maxWidth="md">
            {!submitted ?
                (
                    <>
                        <Typography variant="h3" >Contact Us</Typography>
                        <Typography>Let us know how we can help.</Typography>
                        <TextField
                            fullWidth required={true} label="Email" variant="outlined" name="email"
                            onChange={handleChange}
                            helperText={state.errors.email}
                            error={state.errors.email ? true : false}
                            sx={{ marginTop: 2 }}

                        />
                        <TextField fullWidth label="Given Names" type="text" variant="outlined" name="givenName"
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                        />
                        <TextField fullWidth label="Family Name" type="text" variant="outlined" name="familyName"
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                        />
                        <TextField data-test="enquiry" fullWidth label="Enquiry" type="text" variant="outlined"
                            name="enquiry"
                            multiline={true} rows={6}
                            onChange={handleChange}
                            sx={{ marginTop: 2 }}
                        />
                        <Stack alignItems="flex-end">
                            <LoadingButton
                                loading={submitting}
                                color="secondary"
                                disabled={!formCheck}
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{ marginTop: 2 }}
                            >
                                Submit
                            </LoadingButton>
                        </Stack>
                    </>
                )
                :
                (
                    <Stack direction="column"
                        alignItems="center"
                        spacing={2} sx={{ py: 20 }} >
                        <Typography variant="h3" >Success</Typography>
                        <Typography sx={{ py: 1 }} >Thank you. We will respond to your message soon.</Typography>
                        <Box sx={{ pt: '1rem', width: '50%' }}>
                            <Button onClick={() => navigate("/")} color="secondary" fullWidth variant="contained" >Return</Button>
                        </Box>
                    </Stack>
                )}
        </Container>
    )
}
export default Contact;