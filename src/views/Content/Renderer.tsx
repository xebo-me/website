import React from 'react';

import Container from "@mui/material/Container";
import { Entry } from "contentful";

import HeroBanner from './blocks/HeroBanner';
import Section from './blocks/Section';
import TextBlock from './blocks/TextBlock';
import Outline from '@/components/Outline';
import { ContentProps, AnyEntry, AssemblyEntry } from '@/types';

// ignore any errors for now
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks: Record<string, React.FC<ContentProps<any>>> = {
    'section': Section,
    'heroBanner': HeroBanner,
    'textBlock': TextBlock
};

export const Renderer = (props: ContentProps<AnyEntry>) => {
    const { contentEntry } = props;

    return (
        <>
            {/* TODO: if content type has 'blocks' field, render child blocks */}
            {contentEntry?.sys?.contentType.sys.id === 'assembly' &&
                <>
                    {(contentEntry as Entry<AssemblyEntry>).fields?.blocks.map((block, index) =>
                        <Container key={index} maxWidth="lg" sx={{ px: { xs: 1, sm: 10, md: 20 }, my: 6 }}>
                            <Factory contentEntry={block} />
                        </Container>
                    )}
                </>
            }
            {contentEntry?.sys?.contentType.sys.id !== 'assembly' &&
                <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 10, md: 20 }, my: 5 }}>
                    <Factory contentEntry={contentEntry} detail={true} />
                </Container>
            }
        </>
    )
}


const Factory = (props: ContentProps<AnyEntry>) => {
    const { contentEntry, detail } = props;
    const id = contentEntry?.sys.contentType.sys.id;

    if (!id) {
        return <Outline />
    }
    return blocks[id]({ contentEntry, detail })
}

export default Renderer;