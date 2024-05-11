export const factorialDescription = `
<p>O fatorial é uma operação matemática que envolve multiplicar uma série de números naturais consecutivos de 1 até o número ao qual se deseja calcular o fatorial. O fatorial de um número n, denotado por n!, é o produto de todos os inteiros positivos menores ou iguais a n.</p>

<h2>Definição Matemática:</h2>
<p>n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1</p>

<p>Para n = 0, define-se 0! = 1 por convenção, pois o número de formas de arranjar zero objetos é 1.</p>

<h2>Exemplos:</h2>
<ul>
  <li>3! = 3 × 2 × 1 = 6</li>
  <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
  <li>0! = 1</li>
</ul>

<h2>Aplicações do Fatorial:</h2>
<ol>
  <li>Combinatória: Usado no cálculo do número de combinações e permutações.</li>
  <li>Probabilidade: Usado para calcular probabilidades em modelos onde a ordem dos eventos importa.</li>
  <li>Análise: Em séries de Taylor e Maclaurin, os coeficientes dos termos envolvem fatoriais.</li>
  <li>Álgebra: Em problemas de divisibilidade e em algumas identidades algébricas.</li>
</ol>

<h2>Propriedades do Fatorial:</h2>
<p>- Crescimento Rápido: O valor de n! cresce extremamente rápido com o aumento de n.</p>
<p>- Recursividade: n! = n × (n-1)!, e 0! = 1.</p>

<h2>Limitações:</h2>
<p>O cálculo de fatoriais para números grandes rapidamente se torna impraticável sem técnicas especiais devido ao rápido crescimento dos resultados.</p>
`;


export const binarySearchDescription = `
<p>A busca binária é um algoritmo eficiente para encontrar um elemento específico em um array ordenado. Diferente das buscas sequenciais, que verificam cada elemento um por um, a busca binária divide repetidamente o espaço de busca pela metade, o que torna o processo muito mais rápido para grandes quantidades de dados.</p>

<h2>Princípio Básico:</h2>
<p>O princípio da busca binária é baseado na estratégia de divisão e conquista. Inicia-se com um intervalo que cobre todo o array. Em cada passo, o algoritmo compara o elemento no meio do intervalo com o alvo e decide procurar à esquerda ou à direita com base no resultado da comparação.</p>

<h2>Passos do Algoritmo:</h2>
<ol>
  <li>Encontre o elemento central do array ou subarray.</li>
  <li>Compare o elemento central com o valor alvo.</li>
  <li>Se o elemento central é igual ao alvo, a busca termina com sucesso.</li>
  <li>Se o alvo é menor que o elemento central, repita a busca para a metade esquerda do array.</li>
  <li>Se o alvo é maior, repita a busca para a metade direita do array.</li>
  <li>Se o subarray é reduzido a zero, a busca termina sem encontrar o alvo.</li>
</ol>

<h2>Complexidade Temporal:</h2>
<p>A busca binária tem uma complexidade de tempo logarítmica, O(log n), porque cada passo da busca corta o espaço de busca pela metade. Esta eficiência torna a busca binária muito mais rápida que a busca sequencial para listas grandes, especialmente comparada a uma complexidade de O(n) da busca sequencial.</p>

<h2>Aplicações:</h2>
<ul>
  <li><strong>Bases de Dados:</strong> Usada para buscar rapidamente entradas em bases de dados indexadas.</li>
  <li><strong>Problemas de Otimização:</strong> Utilizada em problemas onde a função objetivo permite uma busca eficiente por divisão, como encontrar um ponto de mínimo ou máximo.</li>
  <li><strong>Computação Gráfica:</strong> Para encontrar posições de inserção em listas de elementos já ordenados, como na renderização onde a ordem dos elementos pode afetar o resultado final.</li>
</ul>

<h2>Vantagens e Limitações:</h2>
<p>A principal vantagem da busca binária é sua velocidade em comparação com algoritmos de busca linear, mas ela exige que o array esteja pré-ordenado, o que pode ser uma desvantagem se os dados estão frequentemente mudando e precisam ser reordenados regularmente.</p>
`;

export const mergeSortDescription = `
<p>O Merge Sort é um algoritmo de ordenação eficiente que utiliza a técnica de divisão e conquista para ordenar listas de elementos. Ao dividir o problema original em subproblemas menores e mais gerenciáveis, o Merge Sort consegue eficiência e estabilidade, sendo particularmente útil em conjuntos de dados grandes.</p>

<h2>Princípio Básico:</h2>
<p>O algoritmo divide a lista em duas metades, ordena cada metade e depois as funde em uma única lista ordenada. O processo de divisão continua até que cada sublista contenha apenas um elemento, momento em que uma lista unitária é considerada ordenada por definição.</p>

<h2>Passos do Algoritmo:</h2>
<ol>
  <li>Dividir a lista em duas metades até que as sublistas contenham apenas um elemento cada.</li>
  <li>Combinar (ou mesclar) as sublistas para produzir novas listas ordenadas. Este processo continua até que tenhamos apenas uma lista única e completamente ordenada.</li>
</ol>

<h2>Complexidade Temporal:</h2>
<p>O Merge Sort tem uma complexidade de tempo constante de O(n log n) em todos os casos, o que o torna extremamente previsível e eficiente comparado a outros algoritmos de ordenação que podem degradar a O(n²) em cenários de pior caso.</p>

<h2>Aplicações:</h2>
<ul>
  <li><strong>Bases de Dados:</strong> É ideal para ordenação de grandes bases de dados onde a estabilidade é crucial (isto é, a ordem relativa de elementos iguais é mantida).</li>
  <li><strong>Processamento de Dados Grandes:</strong> Utilizado em ambientes que requerem processamento e ordenação eficientes de grandes volumes de dados, como em sistemas de informação geográfica e em software de processamento de imagem.</li>
</ul>

<h2>Vantagens e Limitações:</h2>
<p>As principais vantagens do Merge Sort incluem sua eficiência e estabilidade, fazendo dele uma escolha popular para aplicações comerciais e científicas. No entanto, ele requer uma quantidade significativa de memória adicional para armazenar as sublistas durante a ordenação, o que pode ser uma limitação em sistemas com recursos limitados.</p>
`;
