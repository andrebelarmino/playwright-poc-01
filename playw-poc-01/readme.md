README

=======================================
Playwright POC (Proof of Concept)
=======================================

=======================================
Quando usar Playwright
- Ideal para equipes modernas que buscam automação de testes E2E escalável, confiável e preparada para aplicações web modernas, com execução local e integração nativa com pipelines CI/CD em nuvem.

Pontos fortes
- Automação E2E completa, com execução paralela e escalável.
- Suporte nativo a múltiplos navegadores (Chromium, Firefox e WebKit/Safari).
- Recursos avançados de depuração (trace viewer, screenshots, vídeos).
- Arquitetura moderna, preparada para evolução contínua e novos cenários de teste.

Limitações
- Não automatiza aplicativos móveis nativos (apenas emulação de navegadores mobile).
- Possui curva de aprendizado inicial, especialmente em paralelização, isolamento de contexto e uso avançado de seletores.
- Comunidade menor que Selenium, porém em rápido crescimento e com forte suporte oficial da Microsoft.

Pontos de destaque
- Espera automática inteligente, reduzindo a necessidade de waitFor manuais.
- Interceptação e simulação de rede para testes de APIs e cenários complexos.
- Visualizador de rastreamento (trace viewer) integrado, facilitando a depuração.
- Suporte a múltiplas linguagens (JavaScript, TypeScript, Python, C#, Java).
- Execução paralela nativa, sem necessidade de grid.

Esta POC demonstra a aplicação prática desses recursos por meio de cenários E2E, explorando paralelização, isolamento de contexto e estratégias modernas de automação.
=======================================

=======================================
Cenários propostos

Esta Prova de Conceito contempla cenários que demonstram boas práticas, recursos avançados do Playwright e integração com pipelines modernos de testes automatizados.

[01] Page Object Model (POM) + Utils: Organização do código de testes utilizando POM para melhor manutenibilidade, reutilização e separação de responsabilidades, com apoio de funções utilitárias compartilhadas.

[02] Testes Data-Driven: Execução de testes orientados a dados, permitindo validação de múltiplos cenários a partir de diferentes conjuntos de entrada, aumentando a cobertura com baixo custo de manutenção.

[03] Autenticação com Storage State: Reutilização de estado de autenticação por meio do storageState, reduzindo tempo de execução e evitando repetição de fluxos de login.

[04] Interceptação e Mock de APIs: Uso de interceptação de rede para simular respostas de APIs, testar cenários alternativos e garantir maior previsibilidade e isolamento dos testes E2E.

[05] Estrutura de Testes (BDD ou Playwright Puro): Implementação dos testes utilizando BDD ou a sintaxe nativa do Playwright Test, com foco em boa nomenclatura, legibilidade e fácil entendimento dos cenários.

[06] Geração Automática de Relatórios: Geração automática de relatórios de execução (HTML/trace), facilitando a análise de resultados e a identificação de falhas.

[07] Integração Contínua com Jenkins: Execução automatizada dos testes em pipeline CI, demonstrando integração com Jenkins e preparo para execução em ambientes de nuvem.

Observação: Todos os cenários foram desenvolvidos em TypeScript, explorando tipagem estática, melhor organização do código e maior confiabilidade durante o desenvolvimento dos testes. Essa escolha visa aumentar a robustez da automação, reduzir erros em tempo de desenvolvimento e facilitar a escalabilidade da solução.
=======================================

=======================================
Comandos úteis:

Bloqueio de execução do npm em Terminal no VS Code:
Get-ExecutionPolicy       
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned  

Geração de Código: npx playwright codegen

Execução: npx playwright test

Execução em UI: npx playwright test --ui

Execução em Debug: npx playwright test --ui --debug
=======================================

Para rodar POC 01:
npx playwright test --ui --debug 

Para rodar POC 02:
npm test
=======================================
