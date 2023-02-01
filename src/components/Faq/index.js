import { Message } from 'semantic-ui-react';

import '../../styles/index.scss';

function Faq() {
  return (
    <>
      <Message
        header="A quoi ça sert ?"
        content="Cette application permet de trouver une liste de dépôts GitHub pour un critère donné."
      />
      <Message
        header="Comment faire une recherche ?"
        content="Sur la page recherche, complétez le champ de recherche et valider la recherche."
      />
      <Message
        header="Que peut-on chercher ?"
        content="Tous les mots clefs sont possibles."
      />
    </>
  );
}

export default Faq;
