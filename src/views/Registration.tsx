
import React, { useState, useReducer } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import LoadingButton from "@mui/lab/LoadingButton";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo-blue.svg';
import { emailValid, createSubmission } from '@/functions';

type State = {
    email: string;
    name: string;
    errors: {
        email?: string;
    };
}

type Action = {
    [key: string]: string
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
        case 'name':
            return { ...state, name: action.value };
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
const init = { email: "", name: "", errors: {} };

const Registration = () => {
    const [state, dispatch] = useReducer(reducer, init);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const formCheck = emailValid(state);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setSubmitting(true);

        const data = {
            name: state.name,
            email: state.email,
        };

        const url = `/.netlify/functions/registration`;
        createSubmission({ url, data, setSubmitting, setSubmitted });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: name, value: value });
    }

    const message = {
        header: !submitted ? "Request a demo of xebo" : `Request sent successfully`,
        body: !submitted ? "Find out more about Xebo by signing up to use our interractive demo." : "Thank you for your registration. We have emailed you a link to our demo.",
    }


    return (
        <Container component={Paper} elevation={1} sx={{ my: 10, p: 2, backgroundColor: 'background.default' }} maxWidth="sm">
            <Stack alignItems="center" spacing={2} >
                <Box component="img" src={logo} alt="logo" sx={{ height: 25 }} />
                <Typography variant="h3" >{message.header}</Typography>
                <Typography align="center">{message.body}</Typography>
                {submitted &&
                    <>
                        <CheckIcon sx={{ fontSize: 100, color: 'success.main' }} />
                        <Box sx={{ pt: '1rem', width: '50%' }}>
                            <Button size="large" fullWidth variant="contained" data-test="return" onClick={() => navigate("/")}>Return</Button>
                        </Box>
                    </>
                }
            </Stack>
            {!submitted &&
                <>
                    <TextField
                        fullWidth label="Full Name" type="text" variant="outlined" name="name"
                        onChange={handleChange}
                        sx={{ marginTop: 2 }}
                    />
                    <TextField
                        fullWidth required={true} label="Email" variant="outlined" name="email"
                        onChange={handleChange}
                        helperText={state.errors.email}
                        error={state.errors.email ? true : false}
                        sx={{ marginTop: 2 }}

                    />
                    <LoadingButton
                        loading={submitting}
                        disabled={!formCheck}
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ marginTop: 2 }}
                    >
                        Send request
                    </LoadingButton>
                </>
            }
        </Container>

    )
}
export default Registration; 