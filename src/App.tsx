import './App.css'
import Crossword from '@jaredreisinger/react-crossword';

const data = {
  across: {
    1: {
      clue: 'Ghostly greeting',
      answer: 'BOO',
      row: 1,
      col: 1,
    },
    4: {
      clue: 'Signature clue',
      answer: 'JOHN',
      row: 2,
      col: 0,
    },
    5: {
      clue: 'Pixar Flik',
      answer: 'ANT',
      row: 3,
      col: 1,
    },
    6: {
      clue: 'Sunday animation',
      answer: 'TOON',
      row: 4,
      col: 1,
    },
  },
  down: {
    1: {
      clue: 'Aquatic vehicle',
      answer: 'BOAT',
      row: 1,
      col: 1,
    },
    2: {
      clue: 'Expression of dismay',
      answer: 'OHNO',
      row: 1,
      col: 2,
    },
    3: {
      clue: 'Square dumpling',
      answer: 'WONTON',
      row: 0,
      col: 3,
    },
  },
}

const style = {
  highlightBackground: 'rgba(204, 229, 255, 0.6)'
}

export default function App() {
    return <Crossword data={data} theme={style}/>
}
