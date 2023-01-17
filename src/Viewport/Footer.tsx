import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const array = [
    { title: "Contact us" },
    { title: "Terms of use" },
    { title: "Accessibility" },
    { title: "Privacy" },
]

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <Stack component="footer" sx={{ py: 6, bgcolor: 'background.paper' }} alignItems="center" justifyContent="center" spacing={2}>
            <Box component="footer" sx={{ display: 'flex', justifyContent: 'center' }}>
                {array.map((item, i) =>
                    <Button key={i} sx={{ my: 2, mx: 0.5, color: 'text.primary' }}>
                        {item.title}
                    </Button>
                )}
                <IconButton size="small">
                    <img width="45" alt="" src='https://shielded.co.nz/img/custom-logo.png' />
                </IconButton>
            </Box >
            <Stack alignItems="center" spacing={2}>
                <Typography align="center" color="grayText" variant="body2">
                    {`All content © copyright  ${date} ${import.meta.env.VITE_APP_NAME}.`}
                </Typography >
                <Typography align="center" color="grayText" variant="body2">
                    All rights reserved.
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Footer;
