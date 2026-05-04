# Cyclosa

A professional web application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🛠 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: `clsx`, `tailwind-merge`

## ✅ Prerequisites

Make sure you have installed the following on your local machine:
- [Node.js](https://nodejs.org/) (Version 18.18 or higher is required by Next.js 15)
- `npm` (Comes with Node.js)

## ⚙️ Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd Cyclosa
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Project

There are two ways to run the project.

### Method 1: Using the provided shell script (Recommended)
You can start the frontend quickly using the `run.sh` script located in the root directory:
```bash
# In the root 'Cyclosa' directory
./run.sh
```
*Note: Make sure the script is executable by running `chmod +x run.sh` if you encounter permission errors.*

### Method 2: Manual startup
Navigate into the `frontend` folder and start the Next.js development server:
```bash
cd frontend
npm run dev
```

The application will be accessible at `http://localhost:3000/`.

## 📜 Available Scripts (in `frontend/`)

In the `frontend` directory, you can run the following scripts using `npm run <script_name>`:

- **`dev`**: Starts the Next.js development server with hot module replacement.
- **`build`**: Builds the app for production to the `.next` folder.
- **`start`**: Runs the built production app (requires `npm run build` first).
- **`lint`**: Runs `next lint` to find problems in your TypeScript/TSX code.
- **`typecheck`**: Runs `tsc --noEmit` to validate TypeScript types.

## 🌿 Branch Naming Convention

Use `type/short-kebab-description` — lowercase, dash-separated, scoped by purpose.

| Type        | When to use                                  | Example                      |
|-------------|----------------------------------------------|------------------------------|
| `feat/`     | New feature                                  | `feat/contact-form`          |
| `fix/`      | Bug fix                                      | `fix/logo-blur`              |
| `chore/`    | Tooling, dependencies, configs               | `chore/migrate-nextjs`       |
| `refactor/` | Code restructure without behavior change     | `refactor/components-to-tsx` |
| `docs/`     | Documentation only                           | `docs/readme-nextjs`         |
| `hotfix/`   | Urgent production fix                        | `hotfix/broken-logo-link`    |

**Rules of thumb:**
- Lowercase + kebab-case (e.g. `feat/add-dark-mode`, not `Feat/AddDarkMode`).
- Keep it short (2–5 words).
- If using an issue tracker, prefix with the ticket ID: `feat/CYC-123-contact-form`.
- Branch off `main`, merge back via pull request, and delete the branch after merge.

## 📂 Project Structure

```text
Cyclosa/
├── run.sh                  # Convenience script to start the frontend
├── README.md               # Project documentation
└── frontend/               # Next.js application
    ├── app/                # App Router — routes, layouts, pages
    │   ├── components/     # Page-level UI components
    │   ├── globals.css     # Global styles & Tailwind theme
    │   ├── layout.tsx      # Root layout (fonts, metadata)
    │   └── page.tsx        # Landing page
    ├── public/             # Static assets (logo, images)
    ├── next.config.mjs     # Next.js configuration
    ├── postcss.config.mjs  # PostCSS + Tailwind v4 plugin
    ├── tsconfig.json       # TypeScript configuration
    └── package.json        # Project metadata and dependencies
```
