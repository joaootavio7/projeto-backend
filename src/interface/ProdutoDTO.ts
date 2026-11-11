export interface ProdutoDTO {
    idProduto?:  number;
    codProduto?: string;
    nome:        string;
    descricao?:  string;
    preco:       number;
    estoque:     number;
    idCategoria: number;
    // URL da imagem do produto (consumida pelo frontend em ImagemProduto/PProduto/PLoja).
    imagem?:     string | null;
}