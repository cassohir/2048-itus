import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="info">
      <h2>Como jogar?</h2>
      <p>
        O Jogo 2048 é um quebra-cabeça viciante e divertido em que o objetivo é combinar blocos numéricos iguais para formar o número 2048 em uma grade 4x4.
      </p>
      <p>
        Para jogar, você pode usar as setas do teclado (ou deslizar na tela, se estiver em dispositivos móveis) para mover os blocos na direção desejada. Ao mover os blocos, os números iguais se juntarão e formarão um novo bloco com o dobro do valor.
      </p>
      <p>
        O desafio está em planejar seus movimentos estrategicamente para combinar os blocos e alcançar o número 2048 antes que a grade fique completamente preenchida e não haja mais movimentos possíveis.
      </p>
      <p>
        Divirta-se jogando o 2048 e veja até onde você pode chegar!
      </p>
      <p>
        Desenvolvido por <code><a href="https://github.com/cassohir">Cássio Izidorio</a>.</code>
      </p>
    </div>
  );
};

export default Info;


      