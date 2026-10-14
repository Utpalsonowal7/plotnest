export type PropertyType = 'House' | 'Flat' | 'Plot' | 'Farmhouse';
export interface Property { id: number; name: string; area: string; city: string; type: PropertyType; price: number; size: string; beds: number; baths: number; img: number; tag: string; seller: string; }
export interface Visit { id: number; property: number; name: string; date: string; time: string; status: 'Requested' | 'Confirmed' | 'Cancelled'; }
export interface Message { mine: boolean; text: string; }
export interface DemoState { properties: Property[]; saved: number[]; visits: Visit[]; pending: Property[]; messages: Record<number, Message[]>; }
export type Page = 'discover' | 'saved' | 'visits' | 'messages' | 'admin';
