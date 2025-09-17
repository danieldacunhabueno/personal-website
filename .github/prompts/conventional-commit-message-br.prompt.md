---
mode: 'agent'
---
Use o formato de mensagem de commit convencional e utilize emojis e escopo onde apropriado para mensagem informada junto desse prompt. Por exemplo: `feat(ui): 🎨 Adicionar novo componente de botão`.

### Regras para Mensagens de Commit

1. **Idioma**: Escreva as mensagens em português brasileiro.
2. **Formato**: Utilize o formato `conventional commit` como padrão para mensagens de commit.
3. **Escopo**: Sempre inclua o escopo como 'infrastructure', 'tradeProcess', 'dispatcher', 'insurance', 'business', ou outros relevantes.
4. **Emojis**: Use emojis para indicar o tipo de mudança:
   - 🐛 para correção de bugs
   - ✨ para novas funcionalidades
   - 🔧 para melhorias
   - 📦 para atualizações de dependências
   - 📝 para alterações em documentação
   - 🚀 para otimizações de performance
   - ⚙️ para mudanças em configurações
5. **Indicação de Workitem**: Adicione uma indicação como 'sem workitem associado' para destacar que o usuário não vinculou workitems.

### Especificação Detalhada

- **Prefixo**: Os commits devem ser prefixados com um tipo, que consiste em um substantivo como `feat`, `fix`, etc., seguido pelo escopo opcional, `!` opcional, e o terminal obrigatório `:` e espaço.
- **Descrição**: A descrição deve ser um resumo curto das alterações no código, por exemplo: `fix: corrigir problema de parsing de array quando múltiplos espaços estavam presentes na string`.
- **Corpo**: Um corpo de commit mais longo pode ser fornecido após a descrição curta, oferecendo informações contextuais adicionais sobre as alterações no código. Deve começar uma linha em branco após a descrição.
- **Rodapé**: Um ou mais rodapés podem ser fornecidos uma linha em branco após o corpo. Cada rodapé deve consistir em um token de palavra, seguido por `:` ou `#`, e um valor de string.

### Alterações Significativas

- **BREAKING CHANGE**: Alterações significativas devem ser indicadas no prefixo do tipo/escopo de um commit ou como uma entrada no rodapé.
  - No rodapé: `BREAKING CHANGE: descrição da mudança significativa`.
  - No prefixo: `!` imediatamente antes do `:`.

### Exemplos de Mensagens de Commit

Os commits devem seguir o padrão convencional e incluir emojis para indicar o tipo de mudança. Aqui estão os tipos disponíveis:

- `feat(business): ✨ Adicionar suporte para múltiplos tipos de corretoras`  
  **Descrição**: Adicionar novas funcionalidades ao código.  
  **Emoji**: ✨ (Nova funcionalidade)

- `fix(dispatcher): 🐛 Corrigir erro de inicialização do serviço`  
  **Descrição**: Corrigir bugs ou problemas no código.  
  **Emoji**: 🐛 (Correção de bug)

- `docs(tradeProcess): 📝 Atualizar documentação de fluxo de transações`  
  **Descrição**: Alterações na documentação.  
  **Emoji**: 📝 (Documentação)

- `style(controller): 🎨 Ajustar formatação de código no controlador`  
  **Descrição**: Alterações de estilo que não afetam o funcionamento do código (formatação, indentação, etc.).  
  **Emoji**: 🎨 (Estilo)

- `refactor(repository): 🔧 Refatorar lógica de consulta no repositório`  
  **Descrição**: Alterações no código que não adicionam funcionalidades nem corrigem bugs.  
  **Emoji**: 🔧 (Refatoração)

- `perf(infrastructure): 🚀 Melhorar tempo de resposta de API`  
  **Descrição**: Melhorias de desempenho no código.  
  **Emoji**: 🚀 (Otimização de performance)

- `test(validation): ✅ Adicionar testes unitários para validação de entrada`  
  **Descrição**: Adicionar ou modificar testes.  
  **Emoji**: ✅ (Testes)

- `build(ci): 📦 Atualizar dependências do projeto`  
  **Descrição**: Alterações no sistema de build ou dependências externas.  
  **Emoji**: 📦 (Build)

- `ci(pipeline): ⚙️ Ajustar pipeline de integração contínua`  
  **Descrição**: Alterações em arquivos ou scripts de integração contínua.  
  **Emoji**: ⚙️ (Integração contínua)

- `chore: 🛠️ Atualizar configurações gerais do projeto`  
  **Descrição**: Alterações menores ou tarefas administrativas.  
  **Emoji**: 🛠️ (Tarefa administrativa)

- `revert: ⏪ Reverter commit de atualização de dependências`  
  **Descrição**: Reverter um commit anterior.  
  **Emoji**: ⏪ (Reversão)

- `BREAKING CHANGE: 🚨 Alterar estrutura de resposta da API`  
  **Descrição**: Alterações significativas que quebram a compatibilidade com versões anteriores.  
  **Emoji**: 🚨 (Mudança significativa)

Certifique-se de sempre incluir o emoji correspondente ao tipo de commit para facilitar a identificação visual e manter o padrão de mensagens.### Exemplos de Mensagens de Commit

Os commits devem seguir o padrão convencional e incluir emojis para indicar o tipo de mudança. Aqui estão os tipos disponíveis:

- `feat(business): ✨ Adicionar suporte para múltiplos tipos de corretoras`  
  **Descrição**: Adicionar novas funcionalidades ao código.  
  **Emoji**: ✨ (Nova funcionalidade)  
  **Alterações**:  
  - Atualizado `src\02.Domain\Business\Requests\BusinessGroupPostRequest.cs` para incluir suporte a múltiplos tipos de corretoras.  
  - Modificado `src\01.Application\Business\Controllers\v1\BusinessController.cs` para adicionar novo endpoint.  
  - Adicionado testes em `src\03.Services\Business\RequestHandler\Tests\BusinessGroupPostRequestHandlerTests.cs`.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `fix(dispatcher): 🩹 Ajustar comportamento inesperado em validação de entrada`  
  **Descrição**: Correção de um bug não crítico que causa pequenos inconvenientes.  
  **Emoji**: 🩹 (Correção de bug não crítico)  
  **Alterações**:  
  - Ajustado `src\05.BackgroundServices\Dispatcher\ValidationHandler.cs` para corrigir comportamento inesperado em validação de entrada.  
  - Atualizado testes em `src\05.BackgroundServices\Tests\ValidationHandlerTests.cs` para cobrir cenários adicionais.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `fix(dispatcher): 🐛 Corrigir erro de inicialização do serviço`  
  **Descrição**: Corrigir bugs ou problemas no código.  
  **Emoji**: 🐛 (Correção de bug convencional)  
  **Alterações**:  
  - Corrigido `src\05.BackgroundServices\Dispatcher\DispatcherService.cs` para resolver problema de inicialização.  
  - Atualizado testes em `src\05.BackgroundServices\Tests\DispatcherServiceTests.cs`.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `fix(dispatcher): 🚑 Corrigir falha crítica no serviço de mensageria`  
  **Descrição**: Correção de um bug crítico que impacta diretamente o funcionamento do sistema.  
  **Emoji**: 🚑 (Correção de bug crítico)  
  **Alterações**:  
  - Ajustado lógica em `src\05.BackgroundServices\Dispatcher\MessageHandler.cs` para evitar falhas críticas.  
  - Atualizado `src\05.BackgroundServices\Dispatcher\DispatcherService.cs` para melhorar tratamento de erros.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `docs(tradeProcess): 📝 Atualizar documentação de fluxo de transações`  
  **Descrição**: Alterações na documentação.  
  **Emoji**: 📝 (Documentação)  
  **Alterações**:  
  - Atualizado `docs\Prompts\Operations\TemplatePatch.md` com novos exemplos de fluxo de transações.  
  - Adicionado detalhes em `docs\Domain\Model\Options\ApplicationOptions.md`.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `style(controller): 🎨 Ajustar formatação de código no controlador`  
  **Descrição**: Alterações de estilo que não afetam o funcionamento do código (formatação, indentação, etc.).  
  **Emoji**: 🎨 (Estilo)  
  **Alterações**:  
  - Reformatação de código em `src\01.Application\Business\Controllers\v1\BusinessController.cs`.  
  - Ajustado indentação em `src\01.Application\Business\Controllers\v1\TradeProcessController.cs`.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `refactor(repository): 🔧 Refatorar lógica de consulta no repositório`  
  **Descrição**: Alterações no código que não adicionam funcionalidades nem corrigem bugs.  
  **Emoji**: 🔧 (Refatoração)  
  **Alterações**:  
  - Refatorado `src\04.Infrastructure\04.01.Data\Business\Repository\BusinessGroupPostRepository.cs` para melhorar lógica de consulta.  
  - Atualizado `src\02.Domain\Business\Interfaces\Repository\IBusinessGroupPostRepository.cs` para refletir mudanças.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `perf(infrastructure): 🚀 Melhorar tempo de resposta de API`  
  **Descrição**: Melhorias de desempenho no código.  
  **Emoji**: 🚀 (Otimização de performance)  
  **Alterações**:  
  - Otimizado consultas em `src\04.Infrastructure\04.01.Data\TradeProcesses\TradeProcessInstructionSheetPostRepository.cs`.  
  - Ajustado `src\02.Domain\TradeProcesses\Interfaces\Repository\ITradeProcessInstructionSheetPostRepository.cs` para reduzir latência.  
  **Rodapé**:  
  🚨 sem workitem associado  

- `test(validation): ✅ Adicionar testes unitários para validação de entrada`  
  **Descrição**: Adicionar ou modificar testes.  
  **Emoji**: ✅ (Testes)  
  **Alterações**:  
  - Adicionado testes em `src\02.Domain\TradeProcesses\Validators\Tests\TradeProcessPatchHonoraryMinimumRequestItemValidatorTests.cs`.  
  - Atualizado `src\02.Domain\TradeProcesses\Validators\TradeProcessPatchHonoraryMinimumRequestItemValidator.cs` para corrigir cenários de teste.  
  **Rodapé**:  
  🚨 sem workitem associado  
  
Certifique-se de sempre incluir o emoji correspondente ao tipo de commit para facilitar a identificação visual e manter o padrão de mensagens.

### Escopos das menagens de commits.

- `git`
- `workitem`
- `general`
- `login`
- `passwordManager`
- `security`
- `business`
- `docker`
- `infrastructure`
- `tenant`
- `refactor`
- `scaffolding`
- `user`
- `lead`
- `role`
- `queue`
- `ssr`
- `dispatchers`
- `build`
- `ci`
- `docs`
- `validation`
- `api`
- `background-service`
- `entity`
- `repository`
- `controller`
- `config`
- `telemetry`
- `logging`
- `auth`
- `upgrade`
- `downgrade`

### Uso do Tipo de Commit `wip` para Branches Não Principais

O tipo de commit `wip` (Work In Progress) deve ser utilizado exclusivamente em branches não principais, como `feature/1234-nova-funcionalidade` ou `bugfix/5678-correcoes`. Ele serve para salvar o progresso do trabalho ao longo do dia, sem indicar a finalização de uma funcionalidade ou correção.

#### Regras para Commits `wip`:
1. **Branch Atual**: Certifique-se de que o commit está sendo feito em uma branch não principal (ex.: `feature/*`, `bugfix/*`, `hotfix/*`).
2. **Formato**: Utilize o prefixo `wip` seguido do escopo e uma descrição curta.
3. **Emoji**: Inclua o emoji 🚧 para indicar trabalho em progresso.
4. **Finalidade**: Não utilize `wip` para commits que serão incluídos no controle de versão semântico (como `feat` ou `fix`).

#### Exemplos de Mensagens de Commit:
- `wip(feature): 🚧 Salvar progresso do desenvolvimento de inserção de empresa`
- `wip(bugfix): 🚧 Ajustar lógica de validação de entrada`
- `wip(refactor): 🚧 Refatorar estrutura de classes para suporte a múltiplos tipos`

#### Observações:
- Commits com `wip` devem ser reavaliados antes de serem mesclados na branch principal. Eles podem ser reescritos ou agrupados em commits mais significativos (`feat`, `fix`, etc.).
- O uso de `wip` ajuda a manter o histórico de trabalho sem comprometer a qualidade dos commits finais.

Certifique-se de seguir essas regras para manter o padrão de commits organizado e facilitar o controle de versão semântico no futuro.### Uso do Tipo de Commit `wip` para Branches Não Principais

O tipo de commit `wip` (Work In Progress) deve ser utilizado exclusivamente em branches não principais, como `feature/1234-nova-funcionalidade` ou `bugfix/5678-correcoes`. Ele serve para salvar o progresso do trabalho ao longo do dia, sem indicar a finalização de uma funcionalidade ou correção.

### Mensagens de Commit Detalhadas

As mensagens de commit devem seguir o formato abaixo:

```
<type>[scope]: <description>

<detalhamento das alterações em cada arquivo>

<footer obrigatório>
```

#### Exemplo de Mensagem de Commit:

```
feat(business): ✨ Adicionar suporte para múltiplos tipos de corretoras

- Adicionado suporte para múltiplos tipos de corretoras no sistema.
- Atualizado o arquivo `BusinessService.cs` com lógica de validação.
- Modificado o arquivo `BusinessController.cs` para incluir novo endpoint.
- Atualizado testes unitários em `BusinessTests.cs`.

🚨 sem workitem associado
```

### Alertas para Ausência de Workitems Vinculados

Se o commit não estiver vinculado a um workitem, deve ser incluído no rodapé uma marcação explícita com o emoji 🚨 para indicar a ausência de vinculação. Isso serve para identificar desenvolvedores que não estão detalhando os tickets ou cards relacionados ao trabalho realizado.

#### Exemplo de Rodapé para Ausência de Workitem:

```
🚨 sem workitem associado
```

### Observações Importantes

- **Footer Obrigatório**: O rodapé deve sempre estar presente, mesmo que não haja workitem vinculado.
- **Linha em Branco**: Deve haver uma linha em branco entre a descrição curta e o detalhamento das alterações.
- **Detalhamento das Alterações**: Inclua uma lista das alterações realizadas em cada arquivo, explicando brevemente o que foi modificado.
- **Sem Campos Opcionais**: Todas as mensagens de commit devem conter descrição, corpo e rodapé.
