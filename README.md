# Mesa de Cartas — app Android independente

Aplicativo Expo separado do Futebol Top, com sete jogos em português: Truco Paulista, Paciência Klondike, Blackjack 21, Poker 5 cartas, Buraco demonstrativo simplificado, Cacheta simplificada e Mau-Mau. O jogador escolhe um modo na tela inicial e joga contra CPU quando previsto. Não há apostas, pagamentos ou qualquer código/dado de carreira do Futebol Top neste projeto.

## Estado e limites da versão inicial

Este é um protótipo jogável, não uma implementação oficial de regras de torneio. Truco Paulista simplifica empates/manilhas e disputa uma rodada de vazas; Paciência usa compra de uma carta, sem desfazer ou mover sequências inteiras; Buraco demo permite baixar trincas, mas não tem morto, duplas, canastras ou pontuação oficial; Cacheta usa formação de trincas/sequências como critério simplificado e CPU básica; Blackjack, Poker 5 cartas e Mau-Mau são partidas locais sem apostas, com CPU básica. Não existe multijogador online nem progresso salvo ainda.

## Desenvolvimento e validação

- `npm install`
- `npm test` — testes do motor independente (`engine.js`)
- `npx expo start`
- Build Android de validação: `npx expo prebuild --platform android` e `cd android && ./gradlew assembleRelease`.

O workflow `.github/workflows/android.yml` executa os testes e gera um APK assinado como artefato de CI. Nenhuma publicação/release está configurada.
