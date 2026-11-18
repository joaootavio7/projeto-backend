import { Router, type Request, type Response } from "express";

import UsuarioController   from "./controller/UsuarioController.js";
import CategoriaController from "./controller/CategoriaController.js";
import ProdutoController   from "./controller/ProdutoController.js";
import PedidoController    from "./controller/PedidoController.js";
import PerfilController    from "./controller/PerfilController.js";
import { Auth }            from "./middleware/Auth.js";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({ mensagem: "GRENÁ / B4CKDOORS API Online", timestamp: new Date() });
});

router.post("/api/login", Auth.validacaoUsuario);

router.post  ("/api/usuarios",                              UsuarioController.novo);

router.get   ("/api/usuarios",            Auth.verifyToken, Auth.verifyAdmin, UsuarioController.todos);
router.get   ("/api/usuarios/:idUsuario", Auth.verifyToken,                  UsuarioController.usuario);
router.put   ("/api/usuarios/:idUsuario", Auth.verifyToken,                  UsuarioController.atualizar);
router.delete("/api/usuarios/:idUsuario", Auth.verifyToken, Auth.verifyAdmin, UsuarioController.remover);


router.get   ("/api/perfil", Auth.verifyToken, PerfilController.meuPerfil);
router.put   ("/api/perfil", Auth.verifyToken, PerfilController.atualizarMeuPerfil);


router.get   ("/api/categorias",              CategoriaController.todos);
router.get   ("/api/categorias/:idCategoria", CategoriaController.categoria);

router.post  ("/api/categorias",              Auth.verifyToken, Auth.verifyAdmin, CategoriaController.novo);
router.put   ("/api/categorias/:idCategoria", Auth.verifyToken, Auth.verifyAdmin, CategoriaController.atualizar);
router.delete("/api/categorias/:idCategoria", Auth.verifyToken, Auth.verifyAdmin, CategoriaController.remover);

router.get   ("/api/produtos",            ProdutoController.todos);
router.get   ("/api/produtos/:idProduto", ProdutoController.produto);

router.post  ("/api/produtos",            Auth.verifyToken, Auth.verifyAdmin, ProdutoController.novo);
router.put   ("/api/produtos/:idProduto", Auth.verifyToken, Auth.verifyAdmin, ProdutoController.atualizar);
router.delete("/api/produtos/:idProduto", Auth.verifyToken, Auth.verifyAdmin, ProdutoController.remover);


router.get   ("/api/pedidos",           Auth.verifyToken,                  PedidoController.todos);
router.get   ("/api/pedidos/:idPedido", Auth.verifyToken,                  PedidoController.pedido);
router.post  ("/api/pedidos",           Auth.verifyToken,                  PedidoController.novo);
router.put   ("/api/pedidos/:idPedido", Auth.verifyToken, Auth.verifyAdmin, PedidoController.atualizar);
router.delete("/api/pedidos/:idPedido", Auth.verifyToken, Auth.verifyAdmin, PedidoController.remover);

export { router };
