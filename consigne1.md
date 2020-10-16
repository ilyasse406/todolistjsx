## Exercice TodoList

### 1ère Partie

1. Vous devez aller dans le dossier exercices dans ReactJS, et vous devez créer un projet react qui s'appelle "exercice9".
2. Une fois le projet créé, vous devez faire le nettoyage de fichiers, vous devez installer bootstrap et fontawesome.

### 2ème Partie

1. Dans le fichier App, vous devez créer un h1, un input, un bouton "ajouter" et un ul.
2. Vous devez créer un composant Liste dans lequel vous allez juste afficher un li avec un petit message.
3. Vous allez créer un state avec une propriété, et sa valeur sera une chaine de caractères.
4. Vous allez prendre cette propriété et vous allez la mettre comme valeur de l'input.
5. Maintenant, vous devez faire une petite recherche sur internet de comment utiliser la méthode onChange sur un input.

### 3ème Partie 

1. Une fois que vous avez réussi à changer la valeur de l'input grâce à la méthode onChange, vous allez ajouter une propriété dans votre state qui aura comme valeur un tableau vide.

2. Vous allez créer une fonction qui vous allez appeler "ajouter". Cette fonction appartient au bouton ajouter, donc vous devez relier ce bouton avec la fonction "ajouter".

3. Dans cette fonction, il y a 4 choses qui se passent.
3. 1. Vous allez créer une variable, et elle aura comme valeur tout le state
3. 2. Vous allez créer une variable qui sera un objet, et il aura 3 propriétés. Une propriété valeur, une propriété validate et une propriété edit.

3. 2. 1. La propriété "valeur" aura comme valeur le contenu de l'input
3. 2. 2. La propriété "validate" aura comme valeur un booléen false
3. 2. 3. La propriété "edit" aura comme valeur un booléen false

3. 3. Vous prenez cet objet dans sont entièreté, et vous le push dans le tableau de votre state (Oubliez pas que vous ne pouvez pas modifier votre state, vous devez modifier la variable que vous avez créé).
3. 4. Une fois toutes les étapes faites, vous mettez à jour le state