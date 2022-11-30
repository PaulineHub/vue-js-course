SERVEUR JSON

Pour creer un serveur json artificiel:
> npm install json-server --save-dev

Pour rouler le server (on se sert du fichier source db.json et on sert sur le port 3001 pour ne pas entrer en conflit avec le port 3000 qu'utilise Vue):
> npx json-server db.json -p 3001