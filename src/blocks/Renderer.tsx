import React from 'react';

import Box from '@mui/material/Box';
import { Entry } from "contentful";

import HeroBanner from './HeroBanner';
import Section from './Section';
import Outline from '@/components/Outline';
import { ContentProps, AnyEntry, AssemblyEntry } from '@/types';

// ignore any errors for now
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks: Record<string, React.FC<ContentProps<any>>> = {
    'section': Section,
    'heroBanner': HeroBanner
};


const Factory = (props: ContentProps<AnyEntry>) => {
    const { contentEntry, detail } = props;
    const name = contentEntry?.sys.contentType.sys.id;

    if (!name) {
        return <Outline />
    }

    const block = blocks[name];
    return block({ contentEntry, detail })
}

const Renderer = (props: ContentProps<AnyEntry>) => {
    const { contentEntry } = props;

    return (
        <Box >
            {contentEntry?.sys?.contentType.sys.id === 'assembly'
                ?
                <Box>
                    {(contentEntry as Entry<AssemblyEntry>).fields?.blocks.map((block, index) =>
                        <Factory key={index} contentEntry={block} />
                    )}
                </Box>
                :
                <Factory contentEntry={contentEntry} detail={true} />
            }
           
        </Box>
    )
}

export default Renderer;