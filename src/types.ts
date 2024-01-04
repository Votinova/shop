export interface item {
    id: number,
    image: string,
    name: string,
    showAddToCart: boolean
}

export interface typesContext {
    productCart: number [],
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void,
    clickAddToCart: boolean,
    setClickAddToCart: (clickAddToCart: boolean) => void,
    addToCart: (itemId: number) => void,
    removeToCart: (itemId: number) => void
}