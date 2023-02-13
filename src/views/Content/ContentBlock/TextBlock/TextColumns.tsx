import React, { ReactNode } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

import type { ContentProps, TextBlockEntry } from '@/types';


export const TextColumns = (props: ContentProps<TextBlockEntry>) => {
    const { contentEntry } = props;

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_: object, children: ReactNode) => {

                return (
                    <Typography variant="body1" color="grayText" align='right' sx={{
                        lineHeight: 1.75,
                        textAlign: 'justify',
                        marginBlockStart: 0,
                        marginBlockEnd: 0
                    }}>
                        {children}
                    </Typography>
                )
            }
        }
    };

    return (
        <>
            {contentEntry.fields?.title &&
                <Typography align="center" variant="h2" >
                    {contentEntry.fields?.title}
                </Typography>
            }
            {contentEntry.fields.image?.fields.file.url &&
                <Box component="img"
                    sx={{ maxWidth: '50%', height: 'auto', display: { xs: 'none', md: 'flex' }, mx: 'auto' }}
                    src={contentEntry.fields.image.fields.file.url}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            {contentEntry.fields.body &&
                <Typography component="div" variant="body1" color="grayText" sx={{
                    lineHeight: 1.5,
                    textAlign: 'justify',
                    columnCount: { xs: 1, sm: 2 },
                    columnGap: 6,
                    //columnRule: '1px solid lightgrey'
                }}>
                    {documentToReactComponents(contentEntry.fields.body, options)}
                </Typography>
            }
            {contentEntry.fields?.ctaLabel && contentEntry.fields?.ctaUrl &&
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained" component={RouterLink} to={contentEntry.fields?.ctaUrl} color="secondary" sx={{ mt: 4, mb: 4 }}>
                        {contentEntry.fields?.ctaLabel}
                    </Button>
                </Box>
            }
        </>
    )
}

export default TextColumns;