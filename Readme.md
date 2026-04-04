# 🛕 TTD Latest Updates

> *Om Namo Venkatesaya*

Real-time latest updates from **Tirumala Tirupati Devasthanams (TTD)** — seva bookings, darshan tickets, accommodation, and more — delivered through a clean API and a beautiful dashboard.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Live Dashboard** | A stunning, responsive UI with dark/light themes, glassmorphism cards, and smart content rendering |
| **REST API** | Clean JSON endpoint for all TTD latest updates |
| **Smart Rendering** | Dates, times, city names, and section headers are auto-highlighted for readability |
| **Sort & Filter** | Sort by newest/oldest/category and filter by 16+ update categories |
| **Swagger Docs** | Interactive API documentation via Swagger UI |
| **Docker Ready** | Containerized for easy deployment |

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 18.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/dprakash2101/ttd_latest_updates.git
cd ttd_latest_updates

# Install dependencies
npm install

# Start the server
npm start
```

The app will be available at:

| Service | URL |
|---------|-----|
| 🎨 Dashboard | http://localhost:3000 |
| 📡 API | http://localhost:3000/latest-updates |
| 📖 Swagger Docs | http://localhost:3000/api-docs |

### Docker

```bash
docker pull dprakash0321/ttd_latest_updates:latest
docker run -p 3000:3000 dprakash0321/ttd_latest_updates:latest
```

## 📡 API

### `GET /latest-updates`

Returns all current TTD updates as structured JSON.

**Example Response:**

```json
{
  "latestUpdates": [
    {
      "id": 161,
      "data": "Om Namo Venkatesaya\n\nThe Online Quota of General Srivari Seva for Local SV Temples of Chennai, Hyderabad...",
      "cta": "Srivari Seva for Locals",
      "is_internal_redirection": null,
      "redirectionLink": null
    }
  ]
}
```

### Categories

Updates span across various categories including:

- 🙏 **Darshan** — Special Entry Darshan, Angapradakshinam
- 🪔 **Sevas** — Srivari Seva, Arjitha Seva, Virtual Seva, Homam
- 🏨 **Accommodation** — Tirumala & Tirupati room bookings
- 📋 **General** — Donor services, e-Dip registrations, and more

## 🏗️ Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla HTML/CSS/JS (single-file, zero build)
- **Data Source:** TTD Official API
- **CI/CD:** GitHub Actions → Docker Hub → Render
- **Docs:** Swagger UI

## 📁 Project Structure

```
ttd_latest_updates/
├── app.js                  # Express server
├── controllers/
│   └── ttdController.js    # API logic — fetches from TTD
├── models/
│   └── ttdModel.js         # Data model
├── public/
│   ├── index.html          # Dashboard UI
│   └── assets/             # Static assets (images)
├── swagger.json            # API documentation
├── Dockerfile              # Container config
└── .github/workflows/
    └── deploy.yml          # CI/CD pipeline
```

## 🌐 Live

- **Dashboard:** [ttd-latest-updates-latest.onrender.com](https://ttd-latest-updates-latest.onrender.com)
- **API:** [ttd-latest-updates-latest.onrender.com/latest-updates](https://ttd-latest-updates-latest.onrender.com/latest-updates)
- **Swagger:** [ttd-latest-updates-latest.onrender.com/api-docs](https://ttd-latest-updates-latest.onrender.com/api-docs)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

[Devi Prakash Kandikonda](https://github.com/dprakash2101)
