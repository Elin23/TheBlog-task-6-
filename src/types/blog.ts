export interface Category {
    name: string;
    color: string;
    bg: string;
}

export interface Paragraph {
    mainLabel?: string;
    subLabel?: string;
    content: string;
    LinkLabel?: string;
    link?: string;
}

export interface Section {
    title?: string;
    img?: string | any;
    caption?: string;
    paragraphs?: Paragraph[];
    sections?: Section[];
    mainLabel?: string;
    secLabel?: string;
    subLabel?: string;
    content?: string;
    LinkLabel?: string;
    link?: string;
    listLabel?: string;
    list?: string[];
}

export interface Blog {
    id: number;
    title: string;
    img: string | any;
    hook: string;
    date: string;
    categories: Category[];
    text: string[];
    sections: Section[];
}
