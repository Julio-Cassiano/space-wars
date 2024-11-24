# 🎮 Space Wars

## 📜 Descrição
Este repositório contém todo o processo de desenvolvimento do jogo Space-Wars, inspirado no jogo Space Invaders
**Vídeo da demo do jogo:** https://youtu.be/ifpGrog198o

## 👥 Participantes

- 👤 Julio Cassiano | RGM: 32156308
- 👤 Bruno de Alencar | RGM: 30632391
- 👤 João Victor | RGM: 32088493

---

# 📘 Space Wars
- 📖 **Obejtivo do jogo**: O jogo Space Wars se passe no espaço, em uma guerra entre alienígenas e seres humanos. O jogador controle uma nave e tem como objetivo matar todos os inimigos sem morrer durante a batalha.

- 🔄 **Controles**: Os controles do jogo funcionam de maneira simples, o jogador utiliza as teclas "A" e "D" ou teclas direcionais para movimentar a nave e a tecla "Enter" para atirar.

- 🕹️ **Como jogar?**: Jogue Space Wars clicando em **[JOGAR AGORA](https://spacewars-game.vercel.app)**, divirta-se! 😄

## 🔑 Tecnologias utilizadas:
O objetivo inicial era desenvolver um jogo divertido, e que ao mesmo tempo fosse simples. Após a escolha do tema, seguindo a ideia de um jogo simples, foi decidido construir o jogo utilizando as tecnologias HTML, CSS e JavaScript sendo essa a predominante. Não utilizamos nenhuma biblioteca durante o desenvolvimento do projeto, apenas o JavaScript puro.

## 📈 Complexidade do jogo:
O jogo tem uma complexidade baixa, pois é simples, 2D, ocorre em um único cenário e roda no navegador, não exigindo grande processamento. No entanto, algumas partes do código têm complexidade maior. Por exemplo, na classe Grid, há um método chamado init(), que gera a horda de inimigos. Dentro desse método, há um loop **for** aninhado em outro loop **for**, resultando em uma complexidade de O(n²), ou tempo quadrático, de acordo com a notação Big O.

---

# 💻 Documentação:
Todo o projeto possui os seguintes diretórios:
    📂 src
     |--📂 assets
         |-- 📂 audios
              |--📂images
                  |--📂classes 
                        >Grid.js
                        >invader.js
                        >particle.js
                        >player.js
                        >player.js
                        >projectile.js
                        📂-- utils
                            >constants.js

Seguindo a ordem:
📂 - **src**: contem todos os diretórios do projeto.

📂 - **assets**: essa pasta contém os arquivos de mídia, aúdio e imagens.

📂 - **classes**: essa pasta contem todos os arquivos js de cada uma das classes utilizadas no projeto.

📂 - **utils**: Essa pasta contem o arquivo de constantes.

O projeto também possui um arquivo HTML e um CSS. No arquivo HTML existe apenas a tag Canva, que é onde todo o jogo é executado. No arquivo CSS apenas utiliza-se um seletor global para zerar o padding e margin de todo o aruivo HTML.

---

# Classes:
## Player
Essa é a classe principal de todo o projeto, essa classe controla tudo relacionado ao Player, ou seja, a nave. Essa classe possui uma série de atributos, como largura da nave, altura, velocidade e a posição da nave.

## Métodos da classe player:
A classe player possui alguns métodos, são esses:
**getImage(path)** = esse método recebe o diretório de uma imagem e instancia essa imagem em um objeto. Ao final da função, retorna-se a imagem.

**moveLeft()** = esse método serve para controlar o movimento da imagem para o lado esquerdo da tela. Ela utiliza o atributo Velocity como parâmetro para definir a velocidade que a nave irá se mover.

**moveRight()** = esse método serve para controlar o movimento da imagem para o lado direito da tela. Ela utiliza o atributo Velocity como parâmetro para definir a velocidade que a nave irá se mover.

**draw(ctx)** = esse método serve para desenhar a nave na tela, ela recebe diversos parâmetros como: posição, largura e altura para desenhar a nave no local desejado.

**shoot(projectiles)** = esse método serve para disparar o projétil da nave. Ele instancia dentro de um objeto P a classe Projectile.

## Classe Projectile
Essa classe será usada para criar os projéteis que são atirados. Ela tem como atributo *position, width, height, velocity* e esse atributos controlam o tamanho e velocidade do projétil.

## Métodos:
**draw()**: esse método é o que desenha o projétil na tela.

**update()**: esse método controla o movimento do projetil, ele é executado varias vezes para movimentar o projetil.
Link das imagens:
https://foozlecc.itch.io/void-main-ship

## Classe Grid
Essa classe cria uma matriz de "Invasores" e os posiciona na grade, tambem define a
 velocidade e verifica se os invasores atingiram o limite de tela.

## Métodos:
**draw()**: esse metodo faz o desenha os "Invasores".

**update()**: esse metodo atualiza a posição de cada invasor de acordo com a direção atual.

**reachedRightBoudary()** **e** **reachedLeftBoudary()** verificam se algum invasor atingiu o limite direito ou esquerdo da tela, respectivamente.

## Classe Invader
Encapsula as propriedades e comportamentos de um "Invasor" no jogo. Ela é responsável por gerenciar a posição, velocidade, desenho e disparo dos invasores, além de verificar se foram atingidos por projéteis.

## Métodos

**shoot()** cria um novo projétil e o adiciona à lista de projéteis.

**hit()** verifica se o invasor foi atingido por um projétil.

**moveLeft():**
Decrementa a coordenada x da posição do invasor pela sua velocidade atual.
Isso resulta no movimento do invasor para a esquerda na tela.

**moveRight():**
Incrementa a coordenada x da posição do invasor pela sua velocidade atual.
Isso resulta no movimento do invasor para a direita na tela.

**moveDown()**
Incrementa a coordenada y da posição do invasor pela sua altura.
Isso faz com que o invasor se mova para baixo na tela, usado quando os invasores chegam ao limite da tela.

**incrementVelocity(boost)**
Incrementa a velocidade do invasor pelo valor do parâmetro boost.
Isso aumenta a velocidade de movimento do invasor, tornando-o mais rápido.

## Classe Obstacle
Essa classe adiciona um obstaculo retangular no jogo, que funciona como uma barreira. É caracterizada por: 

Posição: A posição x e y do canto superior esquerdo do obstáculo.
Largura: A largura do obstáculo.
Altura: A altura do obstáculo.
Cor: A cor de preenchimento do obstáculo.

## Métodos

**draw(ctx):**

Desenha o obstáculo na tela usando o contexto de renderização 2D ctx.
Define a cor de preenchimento como a cor do obstáculo.
Utiliza o método fillRect() para desenhar um retângulo nas coordenadas especificadas pela posição, largura e altura do obstáculo.

**hit(projectile):**

Verifica se o obstáculo foi atingido por um projétil.
Calcula a posição y do projétil, considerando sua velocidade e direção.
Verifica se a posição x e y do projétil estão dentro dos limites do obstáculo.
Retorna true se houver colisão, false caso contrário.

## Classe Particle 
Essa classe cria as particulas que é usada para cria a animação de destruição das Nave e do Invasor. É caracterizada por:

position: Um objeto { x, y } representando a posição da partícula na tela.
velocity: Um objeto { x, y } representando a velocidade da partícula (deslocamento por quadro).
radius: O raio da partícula, determinando seu tamanho.
color: A cor da partícula em formato hexadecimal (ex: "#FF0000").
opacity: A transparência inicial da partícula (1 é opaco, 0 é transparente)

## Métodos 

**draw(ctx):**

Salva o estado atual do contexto de renderização 2D (ctx).
Inicia um novo caminho (beginPath).
Define a transparência global (globalAlpha) com base na propriedade opacity.
Cria um arco circular na posição, com o raio especificado (arc).
Define a cor de preenchimento (fillStyle) como a cor da partícula (color).
Preenche o arco (fill).
Fecha o caminho (closePath).
Restaura o estado anterior do contexto (restore).

**update():**

Atualiza a posição da partícula somando a velocidade em cada eixo (x e y).
Diminui a transparência (opacity) em um valor incremental.
Verifica se a transparência atingiu zero (totalmente transparente).
Se sim, define a transparência como zero.
Se não, diminui a transparência pelo valor incremental.

---

## SoundEffects

Essa é a classe de configuração do sistema de som do jogo. A classe possui funções de reproduzir os sons de disparo, explosões, danos, restart e ajuste do volume.

## Métodos:
A classe possui 5 métodos, tais métodos são:

**playShootSound()**: Reproduz o som de disparo, alternando entre diferentes sons de disparo, se houver mais de um disponível. O som será reiniciado sempre que for tocado.

**playHitSound()** = Reproduz o som de impacto (dano), alternando entre diferentes sons de impacto, se houver mais de um disponível.

**playExplosionSound()** = Reproduz o som de explosão. Este som não possui alternância e será tocado sempre que chamado.

**playNextLevelSound()** = Reproduz o som de transição para o próximo nível. Assim como a explosão, esse som será tocado toda vez que o método for chamado.

**adjustVolumes()** = Ajusta o volume dos diferentes tipos de som para uma configuração padrão. Este método define volumes específicos para sons de disparo, impacto, explosões e transições de nível.
