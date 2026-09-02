export interface Book {
    id: string
    title: string;
    authors: string;
    rating: number;
    theme: number | string;
}

export interface BookSpineProps {
    spine: Book;
}