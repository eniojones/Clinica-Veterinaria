# MartinsVet

Página institucional de uma clínica veterinária e pet shop, com foco em apresentar os serviços da empresa, a proposta de atendimento e um canal de contato para o cliente.

## Status do projeto

Em desenvolvimento, mas com a estrutura principal já implementada e funcionando no navegador. O site conta com layout de página institucional, navegação por âncoras, hero section, serviços, formulário de contato e chatbot interativo.

## Funcionalidades atuais

- Cabeçalho com a marca MartinsVet e navegação para as seções da página.
- Seção hero com imagem de destaque, título e chamada principal.
- Seção “Sobre Nós” com apresentação da clínica.
- Seção de serviços com cards para:
  - Consultas Veterinárias
  - Banho e Tosa
  - Pet Shop
- Efeito de hover nos cards de serviços.
- Seção de contato com formulário de agendamento.
- Botão de envio com estilo visual e interação no hover.
- Rodapé com identificação da marca.
- Chatbot flutuante com botão de ativação e caixa de mensagens.
- Atualização dinâmica do título principal via JavaScript.

## Tecnologias

- HTML5 para estruturas e conteúdo.
- CSS3 para layout, paleta de cores, responsividade básica e estilos visuais.
- JavaScript para interações simples na página e manipulação do DOM.
- Arquivo WebP para a imagem de fundo da seção hero.

## Como executar

Você pode abrir o arquivo `index.html` diretamente no navegador ou utilizar uma extensão como Live Server no VS Code para visualizar a página em modo de desenvolvimento.

Exemplo rápido:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Estrutura do projeto

```text
.
├── index.html       # Estrutura da página
├── style.css        # Estilos visuais e layout
├── script.js        # Interações em JavaScript
├── martinsvet.webp  # Imagem da seção hero
├── README.md        # Documentação do projeto
└── .gitignore       # Arquivos ignorados pelo Git
```

## Observações

- A página é estática e ainda não possui integração com backend.
- O formulário de contato e o chatbot estão em fase inicial de interação front-end.
- O JavaScript atual já realiza manipulações simples no DOM para demonstrar conceitos básicos de programação.

## Próximos passos

- Implementar validação de formulário.
- Conectar o formulário a um backend ou serviço de envio.
- Melhorar a experiência do chatbot com respostas mais dinâmicas.
- Ajustar responsividade para mobile.
- Adicionar informações reais de contato, horário de funcionamento e localização.
- Expandir o conteúdo com galeria, depoimentos e redes sociais.