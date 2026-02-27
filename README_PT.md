# Playwright POC (Proof of Concept)

### When to use Playwright
- Ideal for modern teams seeking scalable, reliable E2E test automation ready for modern web applications, with local execution and native integration with cloud CI/CD pipelines.

### Strengths
- Complete E2E automation, with parallel and scalable execution.
- Native support for multiple browsers (Chromium, Firefox, and WebKit/Safari).
- Advanced debugging features (trace viewer, screenshots, videos).
- Modern architecture, ready for continuous evolution and new testing scenarios.

### Limitations
- Does not automate native mobile applications (only mobile browser emulation).
- Has an initial learning curve, especially in parallelization, context isolation, and advanced use of selectors.
- Smaller community than Selenium, but growing rapidly and with strong official support from Microsoft.

### Highlights
- Intelligent automatic waiting, reducing the need for manual waitFor.
- Network interception and simulation for API testing and complex scenarios.
- Integrated trace viewer, facilitating debugging.
- Support for multiple languages (JavaScript, TypeScript, Python, C#, Java).
- Native parallel execution, no grid required.

<br/>

---
<br/>

This POC demonstrates the practical application of these resources through E2E scenarios, exploring parallelization, context isolation, and modern automation strategies.

<br/>

---
<br/>

# Proposed scenarios

This Proof of Concept covers scenarios that demonstrate best practices, advanced Playwright features, and integration with modern automated testing pipelines.

### [01] Page Object Model (POM) + Utils
Organization of test code using POM for better maintainability, reuse, and separation of responsibilities, supported by shared utility functions.

### [02] Data-Driven Testing
Execution of data-driven tests, allowing validation of multiple scenarios from different input sets, increasing coverage with low maintenance costs.

### [03] Authentication with Storage State
Reuse of authentication state through storageState, reducing execution time and avoiding repetition of login flows.

### [04] API Interception
Use of network interception to simulate API responses and ensure greater predictability and isolation of E2E tests.

<br/>

---
<br/>

Observação: Todos os cenários foram desenvolvidos em TypeScript, explorando tipagem estática, melhor organização do código e maior confiabilidade durante o desenvolvimento dos testes. Essa escolha visa aumentar a robustez da automação, reduzir erros em tempo de desenvolvimento e facilitar a escalabilidade da solução.

<br/>

---
<br/>

# Comandos úteis

### Bloqueio de execução do npm em Terminal no VS Code:
Get-ExecutionPolicy       
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned  

### Geração de Código:
npx playwright codegen

### Execução:
npx playwright test

### Execução em UI:
npx playwright test --ui

### Execução em Debug:
npx playwright test --ui --debug

<br/>

---
<br/>

### Para rodar POC:
npx playwright test --ui --debug 

<br/>

---
<br/>