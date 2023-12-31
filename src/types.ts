export interface item {
    id: number,
    image: string,
    name: string
}

export interface typesContext {
    productsFilter: item [],
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void,
}