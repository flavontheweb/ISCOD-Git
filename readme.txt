Mecanisme de partage du hook pre-commit

1) Installer le hook localement
   - Depuis la racine du projet, executer:
     npm run install-hooks

2) Fonctionnement au commit
   - A chaque commit, une question s'affiche:
     Creer suivi/commitInfo.txt pour ce commit (y/[n]) ?
   - Si la reponse est y (ou Y):
     - le dossier suivi est cree si besoin
    - le fichier suivi/commitInfo.txt est ecrit avec:
     commit vérifié le <date et heure du jour>
     - le fichier est ajoute automatiquement au commit
   - Si la reponse est n (ou N) ou Entree:
     - aucun fichier complementaire n'est cree
     - le commit continue normalement

3) Pour les autres developpeurs
   - Recuperer ces changements (pull)
   - Lancer une fois:
     npm run install-hooks

Note:
Le texte ecrit dans le fichier est: "commit vérifié le <date et heure du jour>".