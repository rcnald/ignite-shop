# Ignite - Shop

Ignite shop feito para mostrar todo o pontencial do framework NextJS, o projeto foi feito com foco na pasta `pages`, porem atualmente com a ascensão da `app routes` a partir da versão 13 do next, me desafiei a a fazer o projeto e adicionar algumas features nessa nova versão, é claro tentando ao máximo aproveitar das facilidades trazidas pelo next com, server side rendering, native router, SEO etc... 

Um e-commerce de camisas da rocketseat, integrado com a API do stipe, possibilitando checkout.

## Funcionalidades

- **Visualização detalhada:** Ao clicar em qualquer camisa, ela será exibida em uma página para poder ser adicionada a sacola.
- **Sacola de compras:** Sacola que armazena todas as camisas escolhidas para compra.
- **Finalização:** Ir para a tela de checkout, com os produtos do carrinho para finalizar a compra.

## Cartão demonstração
Este projeto esta integrado a API do stripes que disponibiliza card codes para testes.
```http
4242 4242 4242 4242
```
> as outras informações podem e talvez devam ser inventadas.

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

## Como Usar

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/rcnald/ignite-shop.git
   # or
   gh repo clone rcnald/ignite-shop
   ```
2. **Entrar no diretório**
    ```bash
    cd ignite-shop
    ```
  
3. **Instalar suas dependências**
   
    ```
    npm install
    ```
4. **Crie e configure o arquivo de configuração**

    Crie um arquivo `.env.local` na raiz do projeto, com base no `.env.example`

    ```ts
    NEXT_PUBLIC_API_KEY=public_key
    SECRET_API_KEY=secret_key
    NEXT_PUBLIC_URL=http:localhost:3000
    ```
5. **Iniciar o projeto**
    ```
    npm run dev
    ```
    Logo após isso o projeto será iniciado na porta [http://localhost:3000](http://localhost:3000) se disponível.

## Principais tecnologias usadas
Tecnologias e bibliotecas utilizadas para a construção do projeto. 
- [shadcn/ui](https://ui.shadcn.com/)
- [react](https://react.dev/)
- [typescript](https://www.typescriptlang.org/)
- [axios](https://axios-http.com/docs/intro)
- [zod](https://zod.dev/)
- [use-shopping-cart](https://useshoppingcart.com/docs)
- [env-nextjs](https://github.com/t3-oss/t3-env)
- [stripe](https://github.com/t3-oss/t3-env)
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate?tab=readme-ov-file#changing-animation-direction)