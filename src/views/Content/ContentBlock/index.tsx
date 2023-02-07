import React from 'react';

import HeroBanner from './HeroBanner';
import Section from './Section';
import TextBlock from './TextBlock';
import Outline from '@/components/Outline';
import { ContentProps, AnyEntry } from '@/types';

// ignore any errors for now
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blocks: Record<string, React.FC<ContentProps<any>>> = {
    'section': Section,
    'heroBanner': HeroBanner,
    'textBlock': TextBlock
};

export const ContentBlock = (props: ContentProps<AnyEntry>) => {
    const { contentEntry, detail } = props;
    const id = contentEntry?.sys.contentType.sys.id;

    if (!id) {
        return <Outline />
    }
    return blocks[id]({ contentEntry, detail })
}

export default ContentBlock;