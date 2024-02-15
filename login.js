const express = require('express');
const app = express();

// Middleware pour activer la gestion des données de formulaire envoyées par POST
app.use(express.urlencoded({ extended: true }));

// Page de formulaire de connexion
app.get('/auth/login', (req, res) => {
    res.send(`
        <h1>Page de connexion</h1>
        <form action="/auth/login" method="post">
            <div>
                <label for="username">Nom d'utilisateur:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div>
                <label for="password">Mot de passe:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Se connecter</button>
        </form>
    `);
});

// Traitement du formulaire de connexion (POST)
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    // Exemple de vérification basique des identifiants
    if (username === 'user' && password === 'password') {
        res.send('<h1>Connexion réussie!</h1>');
    } else {
        res.send('<h1>Échec de la connexion. Veuillez vérifier vos identifiants.</h1>');
    }
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});