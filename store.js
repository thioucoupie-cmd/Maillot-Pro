/**
 * store.js - Core logic for Maillot Pro
 * Handles products, stock, user sessions, and order history using localStorage.
 */

const Store = {
    config: {
        currency: 'FCFA',
        merchantNumber: '773972689'
    },
    
    products: [
        {
            id: 'elite-white-gold',
            name: 'Maillot Elite Édition',
            team: 'Sénégal',
            player: 'Sadio Mané',
            price: 18000,
            currency: 'FCFA',
            size: 'M',
            color: 'White/Gold',
            stock: 15,
            image: 'sadio_mane.png',
            gallery: [
                'sadio_mane.png',
                'https://via.placeholder.com/400x500/FFFFFF/000000?text=Vue+Arriere',
                'https://via.placeholder.com/400x500/FFFFFF/000000?text=Detail+Tissu'
            ],
            category: 'Premium',
            details: "Conçu pour une performance d'élite. Tissu ultra-respirant avec technologie Mesh 4D. Broderie dorée premium du lion de la Teranga. Coupe athlétique pour un confort maximal sur et hors du terrain."
        },
        {
            id: 'lions-heritage',
            name: 'Maillot Lions Heritage',
            team: 'Sénégal',
            player: 'Édition Spéciale',
            price: 20000,
            currency: 'FCFA',
            size: 'M',
            color: 'White/Patterns',
            stock: 10,
            image: 'sadio_mane.png', // Fallback
            category: 'National',
            details: "Un chef-d'œuvre visuel célébrant la culture sénégalaise. Motifs ethniques vibrants sur base blanche premium. Édition collector ultra-limitée."
        },
        {
            id: 'teranga-spirit',
            name: 'Maillot Teranga Spirit',
            team: 'Sénégal',
            player: 'Édition 2024',
            price: 22000,
            currency: 'FCFA',
            size: 'L',
            color: 'Green/Yellow/Red',
            stock: 5,
            image: 'sadio_mane.png', // Fallback
            category: 'National',
            details: "L'essence même du Sénégal. Vert profond avec accents jaune et rouge. Tissu technique de pointe pour une fierté nationale sans compromis."
        },
        {
            id: 'senegal-home-2024',
            name: 'Maillot Domicile 2024',
            team: 'Sénégal',
            player: 'Idrissa Gana Gueye',
            price: 15000,
            currency: 'FCFA',
            size: 'L',
            color: 'Green/White',
            stock: 0, 
            image: 'https://via.placeholder.com/400x500/2A5A3B/FFFFFF?text=Senegal+Home',
            category: 'National',
            details: "Le maillot officiel des Lions de la Teranga pour la saison 2024. Finition haute qualité avec détails culturels sénégalais."
        },
        {
            id: 'al-nassr-home',
            name: 'Maillot Al-Nassr',
            team: 'Al-Nassr',
            player: 'Cristiano Ronaldo',
            price: 21000,
            currency: 'FCFA',
            size: 'M',
            color: 'Yellow/Blue',
            stock: 8,
            image: 'https://via.placeholder.com/400x500/FFCC00/003399?text=Al-Nassr',
            category: 'Club',
            details: "Maillot domicile iconique du club Al-Nassr. Tissu technique haute performance porté par les légendes."
        }
    ],

    state: {
        currentUser: JSON.parse(localStorage.getItem('mp_user')) || null,
        orders: JSON.parse(localStorage.getItem('mp_orders')) || [],
        cart: JSON.parse(localStorage.getItem('mp_cart')) || null
    },

    // --- Authentication ---
    login(email, password) {
        const user = { email, name: email.split('@')[0], id: Date.now() };
        this.state.currentUser = user;
        localStorage.setItem('mp_user', JSON.stringify(user));
        return user;
    },

    logout() {
        this.state.currentUser = null;
        localStorage.removeItem('mp_user');
    },

    // --- Inventory & Search ---
    searchProducts(query) {
        if (!query) return this.products;
        query = query.toLowerCase();
        return this.products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.team.toLowerCase().includes(query) || 
            p.player.toLowerCase().includes(query)
        );
    },

    filterProducts(category) {
        if (category === 'All') return this.products;
        return this.products.filter(p => p.category === category);
    },

    // --- Orders ---
    placeOrder(orderDetails) {
        const product = this.products.find(p => p.id === orderDetails.productId);
        if (!product || product.stock <= 0) {
            throw new Error("Produit épuisé ou invalide.");
        }

        const newOrder = {
            id: 'MP-' + Math.floor(Math.random() * 100000),
            date: new Date().toLocaleDateString('fr-FR', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'En attente',
            total: orderDetails.total,
            currency: this.config.currency,
            items: [orderDetails],
            userId: this.state.currentUser ? this.state.currentUser.id : 'guest'
        };

        product.stock -= 1;
        
        this.state.orders.push(newOrder);
        localStorage.setItem('mp_orders', JSON.stringify(this.state.orders));
        return newOrder;
    },

    getOrderHistory() {
        return this.state.orders;
    }
};

window.Store = Store; 
