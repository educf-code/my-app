# Dolado: Teste prático para Frontend

Duas semanas depois, termino agora, com exatos 41 minutos de atraso o teste prático para frontend. Confesso que ao iniciar, fiquei um pouco assustado: não sabia o que era React, não sabia o que era npm, não sabia o que era git, nunca tinha feito um commit e comentar o código tendo em vista que outra pessoa leria muito menos (imagine consumir uma API rs). Acredito que poderia ser melhor, mas estou satisfeito com o resultado. A aplicação é simples e intuitiva: basta digitar uma banda/artista, apertar Enter e aparecerão na tela 5 vídeos do Youtube, além de suas principais plataformas de áudio e Instagram.
O link para a aplicação encontra-se em: https://buscabanda.web.app/

## O que a aplicação tem?

* framework React: Sem dúvidas, me parece a melhor opção para fazer qualquer aplicação simples atualmente;
* utilização de dependency managers (npm, webpack): Todos os frameworks foram instalados via npm;
* mobile first e layout responsivo: Não sei exatamente se posso dizer que a aplicação é mobile first, uma vez que ela foi adaptada, mas na minha opinião, ficou melhor no mobile do que no PC. A aplicação tem todas suas medidas em porcentagem de tamanho da tela, tornando-a adaptável a diferentes tamanhos de tela;
* framework de componenct (Styled-components): Fundamental para a aplicação funcionar, não imagino o código sem usar Styled Components. A sua flexibilidade para diversos tamanhos de telas, tornou o processo de rodar a o layout da aplicação bem em smartphones muito mais fácil;
* ver o código rodando live (Firebase Hosting): Sistema que me pareceu mais simples de usar, uma vez que já tinha um projeto para conseguir uma API key. Fácil e intuitivo;
* commits consisos: Tentei deixá-los o mais intuitivo possível e dentro de contexto. Existe um chamado 'criando o estado com o input das pesquisas' que misturou algumas mudanças pertencentes ao commit anterior com as que realmente faziam parte daquele, mas acho que nada muito impossível de entender.

## O que a aplicação não tem?

* testes unitários e testes de aceitação: Para ser sincero, não entendi muito bem como os testes encaixariam no sistema nem como os utilizaria. Com certeza devo me aprofundar mais nesse assunto;
* gerenciamento de estado (Redux/Recoil/React Query/etc): eu tentei assiduamente esses 3 + ContextAPI. Não conseguia fazê-los funcionar de maneira nenhuma. Tentei muito  React Query, mas não saiu. Mas, o Recoil, foi perfeito para mim. Adorei a sintaxe e simplicidade, me parecia mais com as props e useState do que com os outros gerenciadores de estado. Cheguei a usá-lo no código todo, mas sempre dava erro na compilação por faltar um loader, que eu nunca descobri qual era. Infelizmente tive que desistir, mas o Recoil ficou com um lugar guardado no meu coração (ele tratou de perdê-lo ao tornar impossível eu fazer o build da aplicação, que cada hora dava um erro diferente; só funcionou quando o excluí);
* BEM naming convention: Não sei se entendi corretamente, mas me pareceu que só fazia sentido dentro do contexto de uso de CSS. Como só usei Styled-Components, decidi deixar de lado. (Posso estar falando uma grande besteira, mas acho que é isso)

## Limitações

A aplicação tem sua atividade um pouco restrita em alguns pontos:
  * As chaves de API do Youtube têm uma cota de requisições/dia. Estourado esse valor, as requisições param de ser feitas.
  * Artistas nacionais têm pouquíssimas informações na API da TicketMaster, fazendo com que a aplicação só fique legal mesmo quando pesquisa-se bandas e artistas internacionais de sucesso não tão recente. Meus preferidos: Metallica, Guns N Roses e Adele.

## O desafio

Gostaria de agradecer à imensa oportunidade que me foi dada por meio desse desafio. Apesar de ter ralado muito, virado pelo menos umas 4 noites e sofrido um pouco, me diverti muito fazendo esse teste. A ideia do sistema é muito boa e me ensinou MUITO. Incrível como colocar a mão na massa nos ensina: hoje tenho mil vezes mais conhecimento do que duas semanas atrás. Apesar de simples, foi disparado o maior feito que já tive na programação, e me deixou muito realizado.

