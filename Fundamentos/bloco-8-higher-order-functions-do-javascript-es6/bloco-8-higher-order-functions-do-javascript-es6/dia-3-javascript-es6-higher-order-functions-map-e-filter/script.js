const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudent) => {
  return listStudent.filter((notStudent) => notStudent !== name)
}

const removido = removeStudentByName('Manuela', arrayMyStudents)

// console.log(removido);

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const percorre = persons.map((arrocha) => `${arrocha.firstName} ${arrocha.lastName}`)
// console.log(percorre);

//Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
// console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const alunos = () => {
  const alunosManha = estudantes.filter((estudanteManha) => estudanteManha.turno === 'Manhã').map((estudantex) => `${estudantex.nome} ${estudantex.sobrenome}`)
  return alunosManha
}

// console.log(alunos());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames() {
  return books.map((nameBooks) => `${nameBooks.name} - ${nameBooks.genre} - ${nameBooks.author.name}`)
}

// console.log(formatedBookNames());

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge() {
  return books.map((namesAge) => {
    return {
      age: namesAge.releaseYear - namesAge.author.birthYear,
      author: namesAge.author.name
    }
  }).sort((a, b) => a.age - b.age)
};

// console.log(nameAndAge());

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter((fantasyOrScience) => {
    if (fantasyOrScience.genre === 'Ficção Científica' || fantasyOrScience.genre === 'Fantasia') {
      return true
    }
  })
}

// console.log(fantasyOrScienceFiction());

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered() {
  currentTime = new Date();
  return books.filter((oldBooks) => {
    const agesBooks = currentTime.getFullYear() - oldBooks.releaseYear
    if (agesBooks >= 60) return true
  }).sort((a, b) => a.releaseYear - b.releaseYear)
}

// console.log(oldBooksOrdered());

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  return books.filter((authorFicScien) => {
    if (authorFicScien.genre === 'Ficção Científica' || authorFicScien.genre === 'Fantasia') {
      return `${authorFicScien.author.name}`
    }
  }).map((namesAll) => namesAll.author.name).sort()
}
// console.log(fantasyOrScienceFictionAuthors());


//🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  let currentTime = new Date();
  return books.filter((oldBooks) => {
    oldBooks = currentTime.getFullYear() - oldBooks.releaseYear;
    if (oldBooks >= 60) return true
  }).map((oldBooks) => oldBooks.name)
}

// console.log(oldBooks());

const expectedResult = 'O Senhor dos Anéis';

//🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
  return books.filter((nameAuthor) => {
     if (nameAuthor.author.name[1] === '.' && nameAuthor.author.name[4] === '.' && nameAuthor.author.name[7] === '.') return true
  }).map((newAuthor) => newAuthor.author.name)
}

console.log(authorWith3DotsOnName());