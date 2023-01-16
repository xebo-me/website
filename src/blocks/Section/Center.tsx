import React from 'react';

import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

import Markdown from '@/components/Markdown';
import type { ContentProps, TextEntry } from '@/types';

const Center = (props: ContentProps<TextEntry>) => {
    const { contentEntry } = props;

    const navigate = useNavigate();

    return (
        <>
            {contentEntry.fields.image?.fields.file.url &&
                <CardMedia
                    sx={{ width: '100%', height: 'auto' }}
                    component="img"
                    src={contentEntry.fields.image.fields.file.url}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            {contentEntry.fields.headline &&
                <Typography align="center" variant="h2" sx={{ pt: { xs: 2, md: 4 }, my: 2 }}>
                    {contentEntry.fields.headline}
                </Typography>
            }
            <Stack justifyContent="center" direction="column" alignItems="center" spacing={2} sx={{ pb: { xs: 2, md: 4 }, color: 'GrayText' }}>
                <ReactMarkdown components={Markdown} >
                    {contentEntry.fields.body}
                </ReactMarkdown>
                {contentEntry.fields.ctaLabel &&
                    <Button onClick={() => navigate(contentEntry.fields.ctaSlug)} variant="contained" sx={{ mt: 4, mb: 4 }}>
                        {contentEntry.fields.ctaLabel}
                    </Button>
                }
            </Stack>
        </>
    )
}

export default Center;