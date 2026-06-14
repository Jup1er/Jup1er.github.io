export interface Connection {
    id: string;
    label: string;
}

export interface RenaissanceItem {
    category: string;
    years: string;
    startYear: number;
    name: string;
    role: string;
    thumbnail?: string; 
    connections: Connection[];
    highlights: string;
    artwork?: string;
    museum?: string;
}