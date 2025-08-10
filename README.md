# ToolYard

Create and publish useful micro‑projects in minutes.

## Features

* 12 ready‑made templates: landing pages, checklists, guides, challenges and more.
* Simple 4‑step wizard with autosave to your browser’s localStorage.
* Export your project as JSON and share it via a special URL with encoded data.
* Manage your projects locally: edit, duplicate or delete them.
* Built with Next.js, TypeScript and Tailwind CSS. No database or authentication.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Adding a new template

Templates live in `lib/templates.ts`. Each template has:

* `slug`: unique string used in the URL.
* `title`: display name.
* `tags`: keywords for searching/filtering.
* `description`: short summary shown in the list.
* `sections`: array of sections with `id`, `label` and `placeholder`.
* `sampleData`: example values for previewing the template.

To add your own template:

1. Open `lib/templates.ts`.
2. Add a new object to the `templates` array following the existing structure.
3. Use a unique `slug` and define at least one section.
4. Provide some sample data for the preview.

## Exporting and importing

When you finish your project in the wizard you can:

* **Publish** – generates a share URL with Base64 encoded JSON data in the hash. No backend is involved.
* **Copy JSON** – copies the raw JSON to your clipboard. You can later paste this into the import field (coming soon).

Import functionality can be added by parsing pasted JSON and populating the wizard state.

## License

This project is licensed under the MIT License.