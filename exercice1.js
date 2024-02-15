const express = require('express');
const app = express();

// Middleware pour activer la gestion des données de formulaire envoyées par POST
app.use(express.urlencoded({ extended: true }));

// Page de formulaire d'inscription
app.get('/auth/register', (req, res) => {
    res.send(`
        <h1>Page d'inscription</h1>
        <form action="/auth/register" method="post">
            <div>
                <label for="username">Nom d'utilisateur:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div>
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div>
                <label for="email">Adresse e-mail:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="birthdate">Date de naissance:</label>
                <input type="date" id="birthdate" name="birthdate" required>
            </div>
            <button type="submit">S'inscrire</button>
        </form>
    `);
});

// Traitement du formulaire d'inscription (POST)
app.post('/auth/register', (req, res) => {
    const { username, password, email, birthdate } = req.body;
    // Exemple de traitement basique des données d'inscription
    // Vous pouvez ajouter ici la logique de sauvegarde des informations d'utilisateur dans une base de données par exemple
    res.send(`<h1>Inscription réussie pour ${username}!</h1>`);
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});