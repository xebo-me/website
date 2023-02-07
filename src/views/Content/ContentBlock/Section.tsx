import React from 'react';

import Box from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import type { ContentProps, SectionEntry } from '@/types';
import ContentBlock from '@/views/Content/ContentBlock';

export const Section = (props: ContentProps<SectionEntry>) => {
    const { contentEntry } = props;

    return (
        <>
            {contentEntry.fields?.title &&
                <Typography align="center" variant="h2">
                    {contentEntry.fields?.title}
                </Typography>
            }
            {contentEntry.fields?.subtitle &&
                <Typography align="center" variant="subtitle2" >
                    {contentEntry.fields?.subtitle}
                </Typography>
            }
            {contentEntry.fields.image?.fields.file.url &&
                <Box component="img"
                    sx={{ maxWidth: '100%', height: 'auto' }}
                    src={contentEntry.fields.image.fields.file.url}
                    alt={contentEntry.fields.image.fields.title}
                />
            }
            {contentEntry.fields?.blocks?.map((entry, index) =>
                <ContentBlock key={index} contentEntry={entry} />
            )}
        </>
    )
}

export default Section;