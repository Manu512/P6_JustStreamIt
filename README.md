# __P6 Projet juststreamit__

## Installation :
* REST API https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

Suivez les instructions du README OCMovies-API.

## Mise en place du site :

Installer les répertoires static et templates dans un serveur Web (Apache/NGINX/Flask/Django)

Accéder à l'URL de la page juststreamit.html du serveur web.
Dans notre exemple via le serveur flask et sa configuration http://127.0.0.1:5000/

# Pour reproduire notre environnement de test :
## Installation environnement virtuel
Se diriger sur le repertoire où l'on souhaite installer l'environnement virtuel.
Exécuter la commande :
* `python3 -m venv 'env'` ('env' sera le repertoire où seront stocké les données de l'environnement 
python)
  
## Activation et installations des dépendances nécessaires au script dans l'environnement virtuel
### Sous Windows les commandes à exécuter :
* `env/Script/activate`
* `pip install -r requirements.txt` ou `pip install Flask`

Activation serveur Web de test :
* `python app.py`

A ce moment, page sera accessible à l'URL http://127.0.0.1:5000/