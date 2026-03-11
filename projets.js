// =====================================================================
//  PROJETS.JS — C'est ici que tu ajoutes / modifies tes projets !
//
//  Pour chaque projet tu peux renseigner :
//    id       → un identifiant unique (pas d'espaces)
//    title    → le titre affiché sur la carte et en page détail
//    tag      → la petite étiquette (ex: "Projet École · Unity")
//    emoji    → utilisé comme fond si tu n'as pas d'image
//    bgColor  → couleur de fond si pas d'image (code hexadécimal)
//    image    → (OPTIONNEL) chemin vers ton image de carte
//               ex: "images/mon-projet.jpg"
//               → place tes images dans un dossier "images/" à côté de index.html
//               → si absent, l'emoji + bgColor sera affiché à la place
//    desc     → courte description affichée au survol de la carte
//    duration → durée du projet
//    team     → taille de l'équipe
//    stack    → technologies utilisées
//    sections → les blocs de texte dans la page détail
//               chaque section a un "title" et soit "text" soit "items" (liste)
//    images   → (OPTIONNEL) tableau de chemins pour la page détail
//               ex: ["images/projet-screen1.jpg", "images/projet-screen2.jpg"]
// =====================================================================


// ── PROJETS D'ÉCOLE ──────────────────────────────────────────────────
const schoolProjects = [
  {
    id: 's1',
    title: 'Compilateur MiniC',
    tag: 'Projet École · Compilation',
    emoji: '⚙️',
    bgColor: '#1a1a2e',
    // image: 'images/compilateur.jpg',   ← décommente et remplace quand tu as une image
    desc: 'Implémentation d\'un compilateur pour un sous-ensemble du langage C.',
    duration: '3 mois',
    team: '2 personnes',
    stack: 'C, Flex, Bison',
    sections: [
      {
        title: 'Contexte & Objectifs',
        text: 'Dans le cadre du cours de compilation, nous avons conçu et implémenté un compilateur complet pour MiniC, un sous-ensemble du langage C.'
      },
      {
        title: 'Moyens mis en place',
        items: ['Analyse lexicale avec Flex', 'Analyse syntaxique avec Bison (grammaire LALR)', 'Table des symboles pour la gestion des portées', 'Génération de code assembleur MIPS']
      },
      {
        title: 'Contraintes & difficultés',
        text: 'La gestion des pointeurs et des tableaux multidimensionnels a représenté le principal défi technique.'
      }
    ],
    // images: ['images/compil-1.jpg', 'images/compil-2.jpg']
  },
  {
    id: 's2',
    title: 'Réseau de Neurones',
    tag: 'IA · Machine Learning',
    emoji: '🧠',
    bgColor: '#0d1b0d',
    desc: 'Réseau de neurones convolutif pour la classification d\'images CIFAR-10.',
    duration: '6 semaines',
    team: '3 personnes',
    stack: 'Python, NumPy, PyTorch',
    sections: [
      {
        title: 'Contexte & Objectifs',
        text: 'Projet de machine learning visant à implémenter et entraîner un réseau de neurones convolutif (CNN) pour la classification d\'images du dataset CIFAR-10.'
      },
      {
        title: 'Architecture & Méthodologie',
        items: ['Architecture ResNet simplifiée', 'Data augmentation (flip, crop, cutout)', 'Optimisation avec Adam + scheduler cosinus', 'Accuracy finale : 87% sur le test set']
      },
      {
        title: 'Défis rencontrés',
        text: 'La gestion de l\'overfitting a nécessité de nombreuses itérations. L\'optimisation des hyperparamètres a été réalisée via une recherche par grille.'
      }
    ]
  },
  {
    id: 's3',
    title: 'Système de Fichiers',
    tag: 'Systèmes · OS',
    emoji: '💾',
    bgColor: '#1c1208',
    desc: 'Implémentation d\'un système de fichiers FAT simplifié en espace utilisateur.',
    duration: '2 mois',
    team: 'Solo',
    stack: 'C, FUSE',
    sections: [
      {
        title: 'Description du projet',
        text: 'Développement d\'un système de fichiers monté via FUSE implémentant les opérations de base : lecture, écriture, création, suppression, répertoires imbriqués.'
      },
      {
        title: 'Fonctionnalités implémentées',
        items: ['Table d\'allocation (FAT)', 'Gestion des inodes', 'Opérations POSIX : read, write, mkdir, ls', 'Journalisation simple pour la cohérence']
      },
      {
        title: 'Points complexes',
        text: 'La fragmentation et la gestion du cache mémoire ont été les principaux obstacles.'
      }
    ]
  }
];


// ── PROJETS PERSO & EXPÉRIENCES ───────────────────────────────────────
const persoProjects = [
  {
    id: 'p1',
    title: 'Bot Discord',
    tag: 'Projet Perso · Automatisation',
    emoji: '🤖',
    bgColor: '#0f0f1a',
    desc: 'Bot de gestion communautaire avec système de modération et mini-jeux.',
    duration: '1 mois (en cours)',
    team: 'Solo',
    stack: 'Node.js, discord.js, MongoDB',
    sections: [
      {
        title: 'Motivation',
        text: 'Passionné de communautés en ligne, j\'ai développé un bot Discord complet pour automatiser la modération et animer un serveur de 500+ membres.'
      },
      {
        title: 'Fonctionnalités',
        items: ['Système de rôles automatique', 'Commandes de modération (ban, mute, warn)', 'Mini-jeux : trivia, économie virtuelle', 'Logs détaillés et alertes']
      },
      {
        title: 'Ce que j\'ai appris',
        text: 'Premier vrai projet asynchrone en Node.js. La gestion des événements Discord et la persistance avec MongoDB m\'ont permis de consolider mes bases backend.'
      }
    ]
  },
  {
    id: 'p2',
    title: 'App de Budget',
    tag: 'Mobile · Finance',
    emoji: '💰',
    bgColor: '#0e1a0e',
    desc: 'Application mobile pour suivre ses dépenses et visualiser son budget.',
    duration: '2 mois',
    team: 'Solo',
    stack: 'React Native, SQLite',
    sections: [
      {
        title: 'Contexte',
        text: 'Frustré par les apps de budget trop complexes ou payantes, j\'ai développé ma propre solution légère centrée sur l\'expérience utilisateur.'
      },
      {
        title: 'Features principales',
        items: ['Saisie rapide de dépenses', 'Catégorisation automatique', 'Graphiques de répartition mensuels', 'Export CSV', 'Thème sombre natif']
      },
      {
        title: 'Défis techniques',
        text: 'La synchronisation des états entre composants React Native et la gestion des performances sur Android ont nécessité un profilage approfondi.'
      }
    ]
  },
  {
    id: 'p3',
    title: 'Hackathon 48h',
    tag: 'Expérience · Compétition',
    emoji: '🏆',
    bgColor: '#1a100a',
    desc: '2ème place — Prototype d\'IA pour l\'accessibilité des transports.',
    duration: '48 heures',
    team: '4 personnes',
    stack: 'Python, FastAPI, React',
    sections: [
      {
        title: 'Le challenge',
        text: 'Hackathon organisé par l\'école sur le thème de la mobilité durable. Notre équipe a proposé un assistant IA pour aider les personnes à mobilité réduite à planifier leurs trajets.'
      },
      {
        title: 'Solution développée',
        items: ['API de traitement du langage naturel', 'Carte interactive des équipements accessibles', 'Système de signalement participatif', 'Interface simplifiée (WCAG AA)']
      },
      {
        title: 'Bilan',
        text: '48 heures intenses et formatrices. La contrainte de temps nous a forcés à prioriser et à livrer un MVP fonctionnel.'
      }
    ]
  }
];
