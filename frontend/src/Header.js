import React from 'react';

export default function Header({children}) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

/* export default function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
} */

// props é tudo que vem de propriedade (parecido com o atributo em HTML), então props.title pega o que tem na propriedade title, no arquivo App.js tem ela
// props.children pega os filhos, propriedade já vem pronta
//export default Header;