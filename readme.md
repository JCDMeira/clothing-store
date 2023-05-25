# Aplicação de atelie de roupas

Essa aplicação é um sistema de cadastro de roupas, com foco em não executar chamadas em excesso, desacoplando o sistema de api e usando cache de informações mantidas pela window em forma de states de rota para evitar chamadas desnecessárias.

## Desenho de fluxo

![image](https://user-images.githubusercontent.com/65555624/236350330-b85ab2b4-f769-427d-9fa7-ffe5afa373c5.png)

## Objetivos específicos

1. Estruturar toda manipulação de produtos com zustand
   Usar o zustand para agregar todas as manipulações de entidade produto, que vem da api, sendo que cada serviço é isolado em um arquivo único.

2. Organizar a aplicação para evitar re-chamadas
   Aplicar conceitos do react e zustand para evitar que chamadas sejam refeitas de modo desnecessário
   Isso é adotado como uma maneira de aproveitar o modelo de desenho do sistema, que presupõe que é uma aplicação desenhada para uma loja de roupas (atêlie), e por isso se aproveita da ideia que é para sempre ter apenas um computador manipulando os dados. E por isso não re-fazer uma chamada não custa para os objetivos de funcionamento. Dessa forma é possível sempre aproveitar os dados preenchidos no front para manipular os estados na store.

3. De modo adicional, usar o estado da rota para persistir informações e não precisar fazer chamadas.

obs: Como um extra, se elevou algumas manipulações dos dados vindos da api para perto de onde se executa a chamada. Assim evitando de manipular caso a caso enquanto se renderiza o componente que consome aquele dado.

# Oportunidades de melhoria

1. A lógica ficou um pouco mais complexa por mexclar uso de store do zustand com a manipulação de estados de rota persistido pela window. É possível melhorar o conceito isolando partes da lógica para favorecer a clareza, ou avaliar o trade-off de manter ambas as lógicas. E se o custo não compensar, deixar apenas um modelo.
2. Refatorar hierarquia de componentes e nomenclatura

# Percepções dos recursos utilizados

1. Ao usa memoization em alguns pontos específicos após testar com a ferramente de extensão do react, em modo avaliação dos ciclos de render. Diversos ciclos e tempos foram reduzidos.
2. Inevitavelmente o uso de MUI gerou alguns ciclos adicionais de renders, assim como mais tempo de duração.
3. Aplicação de code spliting para divisão dos bundles nas pages, fez a renderização ser mais rápida do que não usar. Mas ao aplicar em cada componente da aplicação, isso gerou um ciclo de render maior do que não usando, é provável que ter bundler em muitas partes possa ter sido uma otimização prematura para essa caso, isso levanta a necessidade de sempre ponderar a divisão dos arquivos.
4. Elevar os tratamentos de dados para perto da api estimula ter as manipulações de formas mais claras e juntar tudo em um único ponto, o que fará ser um laço para adicionar todas as necessidades.
   Que nesse caso é um título em com capitalize e o preço em formato similar ao exemplo : R$ 15,00
   Mas para casos mais complexos ou que se arrisque ter mais camadas de manipulação ou um json muito extenso de dados, é provável que isso gere mais custos. Então se recomenda avaliar solução em conjunto ao backend, podendo talvez criar na hora de registro uma chave adicional e persistir o dado também tratado para a situação, pegar e sempre antes de enviar os dados formatar o dado no backend (solução muito comum em modelos de bff) ou se realmente se mantém alguma forma de tratamento parcial ou total no front.
