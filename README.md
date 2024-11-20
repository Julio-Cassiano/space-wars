# 🎮 Space Wars

## 📜 Descrição
Este repositório contém todo o processo de desenvolvimento do jogo Space-Wars, inspirado no jogo Space Invaders

## 👥 Participantes

- 👤 Julio Cassiano | RGM: 32156308
- 👤 Bruno de Alencar | RGM: 
- 👤 João Victor | RGM: 

# 📘 Space Wars
- 📖 **Obejtivo do jogo**: O jogo Space Wars se passe no espaço, em uma guerra entre alienígenas e seres humanos. O jogador controle uma nave e tem como objetivo matar todos os inimigos sem morrer durante a batalha.

- 🔄 **Controles**: Os controles do jogo funcionam de maneira simples, o jogador utiliza as teclas "A" e "D" para movimentar a nave e a tecla "Enter" para atirar.

## 🔑 Tecnologias utilizadas:
O objetivo inicial era desenvolver um jogo divertido, e que ao mesmo tempo fosse simples. Após a escolha do tema, seguindo a ideia de um jogo simples, foi decidido construir o jogo utilizando as tecnologias HTML, CSS e JavaScript sendo essa a predominante. Não utilizamos nenhuma biblioteca durante o desenvolvimento do projeto, apenas o JavaScript puro.

## 📈 Complexidade do jogo:
O jogo tem uma complexidade baixa, pois é simples, 2D, ocorre em um único cenário e roda no navegador, não exigindo grande processamento. No entanto, algumas partes do código têm complexidade maior. Por exemplo, na classe Grid, há um método chamado init(), que gera a horda de inimigos. Dentro desse método, há um loop **for** aninhado em outro loop **for**, resultando em uma complexidade de O(n²), ou tempo quadrático, de acordo com a notação Big O.

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

# Classe Projectile
Essa classe será usada para criar os projéteis que são atirados. Ela tem como atributo *position, width, height, velocity* e esse atributos controlam o tamanho e velocidade do projétil.

## Métodos:
**draw()**: esse método é o que desenha o projétil na tela.

**update()**: esse método controla o movimento do projetil, ele é executado varias vezes para movimentar o projetil.
Link das imagens:
https://foozlecc.itch.io/void-main-ship

