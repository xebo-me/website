// import { Block, Document, Inline, Text } from '@contentful/rich-text-types';
import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from "contentful";

export type MenuEntry = {
    blocks: Entry<MenuItemEntry>[]
};

export type MenuItemEntry = {
    name: string;
    slug: string;
}

export type HeroBannerEntry = {
    headline: string;
    subheader: string;
    heroImage: Asset;
    containedButton: string;
    outlinedButton: string;
};

export type SectionEntry = {
    title: string;
    subtitle: string;
    body: Document;
    image: Asset;
    blocks: Entry<HeroBannerEntry | SectionEntry | TextBlockEntry>[]
};

export type TextBlockEntry = {
    title: string;
    body: Document;
    image: Asset;
    ctaLabel: string;
    ctaSlug: string;
    layout: string;
};

export type AssemblyEntry = {
    blocks: Entry<HeroBannerEntry | SectionEntry | TextBlockEntry>[]
};

export type AnyEntry = AssemblyEntry | HeroBannerEntry | SectionEntry | TextBlockEntry;

export type ContentProps<T> = {
    contentEntry: Entry<T>;
    detail?: boolean;
}
