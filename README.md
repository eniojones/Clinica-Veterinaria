# MartinsVet

Página institucional estática para uma clínica veterinária e pet shop. O projeto apresenta a marca MartinsVet, seus serviços e um formulário de solicitação de atendimento.

## Status do projeto

Em desenvolvimento. A estrutura HTML está completa e os estilos CSS foram expandidos com paleta de cores, componentes estilizados e melhor organização visual. A navegação funciona com âncoras e o formulário aguarda implementação de backend.

## Funcionalidades atuais

- **Cabeçalho** com nome da clínica e menu de navegação com links funcionais (âncoras).
- **Seção Hero** com background image e chamada principal.
- **Seção "Sobre Nós"** com apresentação da MartinsVet.
- **Seção de Serviços** com 3 cards apresentando:
	- Consultas Veterinárias
	- Banho e Tosa
	- Pet Shop
- **Seção de Contato** com formulário funcional (visual) com campos para nome, e-mail, assunto e mensagem.
- **Rodapé** com identificação e ano do projeto.
- **Paleta de cores** definida com variáveis CSS para manutenção facilitada.

## Pendências conhecidas

- O formulário não envia dados para um serviço ou backend.
- Adicionar mais detalhes de responsividade para dispositivos móveis.
- Implementar validação do formulário com JavaScript.

## Tecnologias

- **HTML5** para a estrutura semântica da página.
- **CSS3** com variáveis personalizadas, flexbox, grid e media queries para responsividade.
- **JavaScript** ainda não foi adicionado (previsto para validação do formulário).
- **Backend** ainda não foi implementado (previsto para processamento do formulário).

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

- Otimizar a responsividade para todos os dispositivos (mobile, tablet e desktop).
- Adicionar imagens de alta qualidade para a seção hero e cards de serviços.
- Implementar JavaScript para validação do formulário.
- Criar um backend para processar os dados do formulário de contato.
- Adicionar informações reais de contato, localização e horários de funcionamento.
- Incluir links para redes sociais e WhatsApp.
- Melhorar a acessibilidade (ARIA labels, contraste de cores).
- Adicionar animações e transições para melhor experiência do usuário.