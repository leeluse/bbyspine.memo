export type BookSize = 'xs' | 'sm' | 'md' | 'lg';

export interface Book {
    id: string;
    title: string;
    rating?: number;
    size: BookSize;
    theme: number | string;
}
