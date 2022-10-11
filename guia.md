banco: 
  tabelas:
    cart -> recebe tudo que está contigo no carrinho:
      Nome_produto(todos), Quantidade
    compra -> a compra finalizada(após pagamento):
      Quantidade, valor(total),Nome_Produto(todos)
    produtos -> para cada produto:
      ID, Nome, Quantidade, valor(unitario);