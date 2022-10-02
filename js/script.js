// declare a matriz
matriz = new Array;

/* 
TEMA: JOGOS DE PS2
MATRIZ 20x20
*/
matriz = [
    [0,'B',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,'L',0,0,0,0,0,0,0,0,0,0,0,0,'T','E','K','K','E','N'],
    [0,'A',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,'C',0,'M','E','D','A','L','O','F','H','O','N','O','R',0,0,0,0,0],
    [0,'K',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,'S','P','L','I','N','T','E','R','C','E','L','L',0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,'G','O','D','O','F','W','A','R',0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,'E',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,'F',0,0,0,0,0,0,0,'B',0,0,0,0,0,0],
    [0,0,0,0,0,'J',0,0,0,0,0,0,0,'U',0,0,0,0,0,0],
    [0,0,0,0,0,'A',0,0,0,'D','E','V','I','L','M','A','Y','C','R','Y'],
    [0,0,0,0,0,'M',0,0,0,0,0,0,0,'L',0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,'Y',0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ['M','O','R','T','A','L','K','O','M','B','A','T',0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,'G','U','I','T','A','R','H','E','R','O',0,0,0,0,0,0,0,0,0],
];

const table = document.querySelector('.tabela');

// for para linha
for (linha = 0; linha < 20; linha++)
{
    const createTr = document.createElement('tr');
    createTr.classList.add('coluna');
    table.appendChild(createTr);
    // for para coluna
    for (coluna = 0; coluna < 20; coluna++)
    {
        const createTd = document.createElement('td');
        createTd.classList.add('linha');
        createTr.appendChild(createTd);
        createTd.innerHTML = matriz[linha][coluna];
        
        if (createTd.textContent != 0)
        {
            createTd.classList.add('pintarTd');
        }
    }
}

