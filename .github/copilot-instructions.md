# Instruções do projeto Sepbit

## Contexto
- Este é um site estático, sem framework de frontend ou backend.
- A implementação usa HTML, CSS, JavaScript e Bootstrap 5.3.8.
- O conteúdo e os comentários do projeto devem permanecer em português do Brasil, salvo quando uma API ou biblioteca exigir inglês.

## Estrutura principal
- `index.html`: página principal institucional.
- `field-service/index.html`: página de serviços de suporte técnico presencial.
- `assets/css/styles.css`: estilos compartilhados.
- `assets/js/main.js`: comportamento JavaScript compartilhado.
- `assets/img/`: imagens e recursos visuais.

## Direção visual e conteúdo
- Preservar a direção minimalista e institucional, com preto como base e branco na tipografia.
- Evitar introduzir frameworks, bundlers ou dependências de build sem necessidade explícita.
- Manter o escopo de serviços em consultoria de TI, desenvolvimento de sistemas, hospedagem e suporte técnico presencial.
- Usar tom institucional, claro e objetivo.
- Preservar os contatos atuais quando editar conteúdo: WhatsApp `(11) 92015-5521`, `contato@sepbit.com`, Instagram, LinkedIn e GitHub.

## Regras de implementação
- Reutilizar os estilos e scripts compartilhados antes de criar duplicações por página.
- Manter os caminhos relativos corretos para páginas dentro de subpastas, especialmente `field-service/`.
- Preferir HTML semântico, acessibilidade básica, links funcionais e layout responsivo.
- Fazer alterações pequenas e focadas; não reformatar arquivos não relacionados.
- Não remover alterações existentes do usuário.

## Validação
- Para visualizar localmente, executar:
  `python3 -m http.server 8000 -d /home/guia/sepbit`
- Depois, abrir `http://localhost:8000` e verificar também `http://localhost:8000/field-service/`.
- Ao alterar CSS ou JavaScript compartilhado, validar as duas páginas.
