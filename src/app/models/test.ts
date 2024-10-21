export interface Productos {
    name: string,
    description: string,
    price: number,
    image: string
}
  
export type Roles = {
    rol: 'ADMIN' | 'CLIENTE' | 'VENDEDOR'
}

export interface Usuario {
    id: number,
    image?: string,
    price?: number,
    name: string,
    description: string,
    rol: Roles
}