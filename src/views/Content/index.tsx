import React, { lazy } from 'react';

import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import { Entry } from 'contentful';
import { useParams } from 'react-router-dom';

import ContentBlock from './ContentBlock';
import { fetchContent, Response } from "./contentful";
import { AssemblyEntry } from '@/types';

const NotFound = lazy(() => import('@/views/Content/NotFound'));

export const Content = () => {
    let { type, slug, } = useParams();
    [type, slug] = [type || "assembly", slug || "home"];

    const res: Response = useQuery(['content', type, slug], fetchContent);
    if (res.data?.items.length === 0) {
        return <NotFound />
    }

    return (
        <>
            {/* TODO: if content type has 'blocks' field, render child blocks */}
            {res.data?.items[0]?.sys?.contentType.sys.id === 'assembly' &&
                <>
                    {(res.data?.items[0] as Entry<AssemblyEntry>).fields?.blocks.map((block, index) =>
                        <Container key={index} maxWidth="lg" sx={{ px: { xs: 1, sm: 10, md: 20 }, my: 10 }}>
                            <ContentBlock contentEntry={block} />
                        </Container>
                    )}
                </>
            }
            {res.data?.items[0]?.sys?.contentType.sys.id !== 'assembly' &&
                // <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 10, md: 20 }, my: 5 }}>
                <ContentBlock contentEntry={res.data?.items[0] as Entry<AssemblyEntry>} detail={true} />
                // </Container>
            }
        </>
    )
}

export default Content;