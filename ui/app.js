/**
 * Streaming App - Main Application Logic
 */

// Mock data for shows and episodes
const mockShows = [
    {
        id: 1,
        title: "Breaking Bad",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23000000' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FF6B6B' font-size='24' font-weight='bold'%3EBreaking Bad%3C/text%3E%3C/svg%3E",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
        year: 2008,
        rating: 9.5,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Pilot", description: "A high school teacher turned meth cook", duration: "58 min" },
            { id: 2, season: 1, episode: 2, title: "Cat's in the Bag", description: "Walter and Jesse face consequences", duration: "58 min" },
            { id: 3, season: 1, episode: 3, title: "And the Bag's in the River", description: "The situation gets worse", duration: "58 min" }
        ]
    },
    {
        id: 2,
        title: "The Office",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23004E89' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23F4D03F' font-size='24' font-weight='bold'%3EThe Office%3C/text%3E%3C/svg%3E",
        description: "A mockumentary on the everyday interactions and happenings of the bored employees in the Scranton branch of the Dunder Mifflin Paper Company.",
        year: 2005,
        rating: 9.0,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Pilot", description: "Michael introduces himself", duration: "24 min" },
            { id: 2, season: 1, episode: 2, title: "Diversity Day", description: "A day celebrating diversity", duration: "24 min" },
            { id: 3, season: 1, episode: 3, title: "Health Care", description: "Benefits selection day", duration: "24 min" }
        ]
    },
    {
        id: 3,
        title: "Game of Thrones",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23000000' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFD700' font-size='24' font-weight='bold'%3EGame of Thrones%3C/text%3E%3C/svg%3E",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy emerges from beyond the Wall in the far North.",
        year: 2011,
        rating: 9.2,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Winter is Coming", description: "The Stark family faces a dark future", duration: "56 min" },
            { id: 2, season: 1, episode: 2, title: "The Kingsroad", description: "Eddard accepts his role", duration: "56 min" },
            { id: 3, season: 1, episode: 3, title: "Lord Snow", description: "Jon trains at the Wall", duration: "57 min" }
        ]
    },
    {
        id: 4,
        title: "Stranger Things",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23220055' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FF0000' font-size='24' font-weight='bold'%3EStranger Things%3C/text%3E%3C/svg%3E",
        description: "When a young boy disappears, his friends, family and local police uncover a mystery involving secret government experiments and a strange creature from another world.",
        year: 2016,
        rating: 8.7,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Chapter One", description: "Will goes missing", duration: "47 min" },
            { id: 2, season: 1, episode: 2, title: "Chapter Two", description: "Eleven emerges", duration: "47 min" },
            { id: 3, season: 1, episode: 3, title: "Chapter Three", description: "The discovery", duration: "47 min" }
        ]
    },
    {
        id: 5,
        title: "The Crown",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23FFD700' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23000000' font-size='24' font-weight='bold'%3EThe Crown%3C/text%3E%3C/svg%3E",
        description: "Follow the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        year: 2016,
        rating: 8.6,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Wolferton Splash", description: "Elizabeth becomes queen", duration: "47 min" },
            { id: 2, season: 1, episode: 2, title: "Hyde Park Corner", description: "Adjusting to royal life", duration: "47 min" },
            { id: 3, season: 1, episode: 3, title: "windsor", description: "Royal traditions", duration: "47 min" }
        ]
    },
    {
        id: 6,
        title: "The Mandalorian",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='270'%3E%3Crect fill='%23001a33' width='180' height='270'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23CCCCCC' font-size='24' font-weight='bold'%3EThe Mandalorian%3C/text%3E%3C/svg%3E",
        description: "After the fall of the Empire, a lone bounty hunter operates in the outer reaches of the galaxy, far from the authority of the New Republic.",
        year: 2019,
        rating: 8.7,
        episodes: [
            { id: 1, season: 1, episode: 1, title: "Chapter 1", description: "The Mandalorian begins", duration: "39 min" },
            { id: 2, season: 1, episode: 2, title: "Chapter 2", description: "The Child", duration: "31 min" },
            { id: 3, season: 1, episode: 3, title: "Chapter 3", description: "The Sin", duration: "34 min" }
        ]
    }
];

class StreamingApp {
    constructor() {
        this.currentShow = null;
        this.currentEpisode = null;
        this.allShows = mockShows;
        this.filteredShows = mockShows;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderShows('trending', 'trendingGrid');
        this.renderShows('popular', 'popularGrid');
        this.renderShows('new', 'newGrid');
    }

    setupEventListeners() {
        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e.target.value));
        document.getElementById('closeModalBtn').addEventListener('click', () => this.closeEpisodesModal());
        document.getElementById('closePlayerBtn').addEventListener('click', () => this.closePlayerModal());
    }

    renderShows(type, gridId) {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';

        const shows = this.allShows.slice(0, 6);

        shows.forEach(show => {
            const card = document.createElement('div');
            card.className = 'show-card';
            card.innerHTML = `
                <img src="${show.image}" alt="${show.title}" class="show-image">
                <div class="show-info">
                    <div class="show-title">${show.title}</div>
                    <div class="show-meta">
                        <span>${show.year}</span>
                        <span class="show-rating">⭐ ${show.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => this.openEpisodesModal(show));
            grid.appendChild(card);
        });
    }

    handleSearch(query) {
        if (!query.trim()) {
            this.filteredShows = this.allShows;
        } else {
            this.filteredShows = this.allShows.filter(show =>
                show.title.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.renderSearchResults();
    }

    renderSearchResults() {
        // For now, update trending grid with search results
        const grid = document.getElementById('trendingGrid');
        grid.innerHTML = '';

        if (this.filteredShows.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No shows found</p>';
            return;
        }

        this.filteredShows.forEach(show => {
            const card = document.createElement('div');
            card.className = 'show-card';
            card.innerHTML = `
                <img src="${show.image}" alt="${show.title}" class="show-image">
                <div class="show-info">
                    <div class="show-title">${show.title}</div>
                    <div class="show-meta">
                        <span>${show.year}</span>
                        <span class="show-rating">⭐ ${show.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => this.openEpisodesModal(show));
            grid.appendChild(card);
        });
    }

    openEpisodesModal(show) {
        this.currentShow = show;
        document.getElementById('modalShowTitle').textContent = show.title;
        document.getElementById('modalShowDescription').textContent = show.description;
        document.getElementById('modalShowImage').src = show.image;
        document.getElementById('modalShowYear').textContent = `Year: ${show.year}`;
        document.getElementById('modalShowRating').textContent = `Rating: ⭐ ${show.rating}`;

        const episodesList = document.getElementById('episodesList');
        episodesList.innerHTML = '';

        show.episodes.forEach(episode => {
            const episodeItem = document.createElement('div');
            episodeItem.className = 'episode-item';
            episodeItem.innerHTML = `
                <div class="episode-thumbnail" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white;">
                    S${episode.season}E${episode.episode}
                </div>
                <div class="episode-details">
                    <div class="episode-number">Season ${episode.season} Episode ${episode.episode}</div>
                    <div class="episode-title">${episode.title}</div>
                    <div class="episode-description">${episode.description}</div>
                    <div class="episode-duration">⏱️ ${episode.duration}</div>
                </div>
            `;
            episodeItem.addEventListener('click', () => this.playEpisode(show, episode));
            episodesList.appendChild(episodeItem);
        });

        document.getElementById('episodesModal').classList.add('open');
    }

    closeEpisodesModal() {
        document.getElementById('episodesModal').classList.remove('open');
    }

    playEpisode(show, episode) {
        this.currentEpisode = episode;
        document.getElementById('playerEpisodeTitle').textContent = `${show.title} - S${episode.season}E${episode.episode}: ${episode.title}`;
        document.getElementById('playerEpisodeDesc').textContent = episode.description;
        
        // Set a placeholder video (since we don't have real video files)
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28ymp4BBIIDBQAB/+IMDAABhRAAIvPQ//v/hECcpNj9';

        document.getElementById('playerModal').classList.add('open');
        this.closeEpisodesModal();
    }

    closePlayerModal() {
        document.getElementById('playerModal').classList.remove('open');
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.pause();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new StreamingApp();
});
