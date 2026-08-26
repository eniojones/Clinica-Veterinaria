# MartinsVet

Página institucional estática de uma clínica veterinária e pet shop. A MartinsVet apresenta seus serviços, sua proposta de atendimento e um formulário para solicitação de contato.

## Status do projeto

Em desenvolvimento. A estrutura HTML está pronta e a página já possui identidade visual em CSS, navegação por âncoras, imagem de destaque e efeitos de interação nos cards de serviços. O formulário ainda é apenas visual.

## Funcionalidades atuais

- Cabeçalho com a marca MartinsVet e navegação para as seções da página.
- Seção hero com imagem de destaque, título e chamada principal.
- Seção "Sobre Nós" com a apresentação da clínica.
- Seção de serviços com cards para:
	- Consultas Veterinárias
	- Banho e Tosa
	- Pet Shop
- Efeito de hover nos cards de serviços, com alteração de cor e elevação.
- Seção de contato com campos para nome, e-mail, assunto e mensagem.
- Rodapé com identificação da MartinsVet e ano de referência.

## Tecnologias

- **HTML5** para a estrutura da página.
- **CSS3** com variáveis de cor, Flexbox, transições, transformações e bordas arredondadas.
- **WebP** para a imagem usada na seção hero.

## Como executar

Por ser uma página estática, abra o arquivo `index.html` diretamente no navegador. Para desenvolvimento, também é possível usar uma extensão como o Live Server no VS Code.

O formulário não envia mensagens, pois ainda não possui validação em JavaScript nem integração com um backend.

## Estrutura

```text
.
├── hero.webp    # Imagem da seção hero
├── index.html   # Estrutura da página
├── style.css    # Estilos e identidade visual
└── README.md    # Documentação do projeto
```

## Próximos passos

- Ajustar a responsividade para mobile, tablet e desktop.
- Estilizar completamente os campos e o botão do formulário.
- Implementar validação e envio do formulário com JavaScript.
- Conectar o formulário a um serviço de backend.
- Adicionar informações reais de contato, localização e horários.
- Melhorar acessibilidade, incluindo navegação por teclado, contraste e rótulos dos campos.
- Expandir o conteúdo com galeria, depoimentos e links para redes sociais.