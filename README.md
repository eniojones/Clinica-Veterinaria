# MartinsVet

Página institucional estática para uma clínica veterinária e pet shop. O projeto apresenta a marca MartinsVet, seus serviços e um formulário de solicitação de atendimento.

## Status do projeto

Em desenvolvimento ativo. A estrutura HTML está completa e os estilos CSS foram totalmente implementados com paleta de cores personalizada, componentes estilizados com efeitos interativos, e organização visual profissional. A navegação funciona com âncoras e o formulário possui estilização visual completa, aguardando apenas implementação de backend.

## Funcionalidades atuais

- **Cabeçalho** com nome da clínica, menu de navegação com links funcionais (âncoras) e hover effects.
- **Seção Hero** com background image, padding responsivo e chamada principal em destaque.
- **Seção "Sobre Nós"** com apresentação e missão da MartinsVet em card estilizado.
- **Seção de Serviços** com 3 cards apresentando:
	- Consultas Veterinárias
	- Banho e Tosa
	- Pet Shop
	- Efeitos hover com mudança de cor de fundo e animação de translação
- **Seção de Contato** com formulário totalmente estilizado incluindo:
	- Campos de entrada (nome, e-mail, assunto)
	- Área de texto para mensagem
	- Botão de envio com efeitos hover (muda para cor verde WhatsApp)
- **Rodapé** com identificação, ano do projeto e estilos integrados.
- **Paleta de cores** completa com variáveis CSS:
	- Azul principal (#2e8bc0)
	- Azul claro (#73c2fb)
	- Verde WhatsApp (#4caf50)
	- Branco, cinza e preto para contraste

## Pendências conhecidas

- O formulário não envia dados para um serviço ou backend (apenas estilização visual).
- Implementação completa de responsividade para dispositivos móveis com media queries.
- Implementar validação do formulário com JavaScript.
- Adicionar interatividade com JavaScript (validação, envio de dados, etc.).

## Tecnologias

- **HTML5** para a estrutura semântica e acessível da página.
- **CSS3** com:
	- Variáveis personalizadas (CSS Custom Properties) para paleta de cores
	- Flexbox para alinhamento e layout
	- Transições suaves (0.3s) para efeitos hover
	- Transform (translateY) para animações de movimento
	- Border-radius para cantos arredondados
	- Media queries para responsividade (em desenvolvimento)
- **JavaScript** ainda não foi adicionado (previsto para validação e interatividade do formulário).
- **Backend** ainda não foi implementado (previsto para processamento e armazenamento de dados do formulário).

## Como executar

Como o projeto é uma página estática, basta abrir o arquivo `index.html` no navegador. Também é possível usar uma extensão de servidor local, como o Live Server no VS Code. No estado atual, o formulário é apenas visual e não realiza o envio de mensagens.

## Estrutura

```text
.
├── index.html  # Estrutura da página
├── style.css   # Estilos atuais
└── README.md   # Documentação do projeto
```

## Próximos passos

- Otimizar a responsividade para todos os dispositivos (mobile, tablet e desktop) com media queries.
- Implementar validação de formulário com JavaScript.
- Conectar o formulário a um serviço de backend para envio de dados.
- Adicionar mais conteúdo visual (galeria de fotos, depoimentos, horário de funcionamento).
- Melhorar acessibilidade (ARIA labels, contraste de cores, navegação por teclado).
- Adicionar imagens de alta qualidade para a seção hero e cards de serviços.
- Implementar JavaScript para validação do formulário.
- Criar um backend para processar os dados do formulário de contato.
- Adicionar informações reais de contato, localização e horários de funcionamento.
- Incluir links para redes sociais e WhatsApp.
- Melhorar a acessibilidade (ARIA labels, contraste de cores).
- Adicionar animações e transições para melhor experiência do usuário.