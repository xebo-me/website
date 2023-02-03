import React, { lazy } from 'react';

import { useQuery } from "@tanstack/react-query";
import { Entry } from 'contentful';
import { useParams } from 'react-router-dom';

import { AnyEntry } from '@/types';
import Renderer from '@/views/Content/Renderer';
import { fetchContent } from "@/views/Content/contentful";

const NotFound = lazy(() => import('@/views/Content/NotFound'));

type Response = {
    data?: { items: Entry<AnyEntry>[] }
}

export const Content = () => {
    let { type, slug, } = useParams();
    [type, slug] = [type || "assembly", slug || "home"];

    const res: Response = useQuery(['content', type, slug], fetchContent);
    if (res.data?.items.length === 0) {
        return <NotFound />
    }
    return <Renderer contentEntry={res.data?.items[0] as Entry<AnyEntry>} />
}

export default Content;