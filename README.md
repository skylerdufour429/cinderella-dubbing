# Cinderella Dub Collection

A static multilingual movie-dub collection website designed for:

- GitHub Pages
- GitHub Codespaces
- Desktop browsers
- Mobile browsers
- HTML5 video playback

## Movie

| Field | Value |
|---|---|
| Movie | Cinderella |
| Year | 1950 |
| Studio | Walt Disney Productions |
| Category | Animated Feature |

## Features

- Language video player
- Language selector
- MP4 download buttons
- Open-video buttons
- Responsive layout
- JSON-powered movie metadata
- JSON-powered language collection
- No build system required
- GitHub Pages compatible
- GitHub Codespaces compatible

## Project Structure

```text
cinderella-dub-collection/
├── .devcontainer/
│   └── devcontainer.json
├── media/
│   └── README.md
├── app.js
├── index.html
├── movies.json
├── README.md
└── styles.css
````

## GitHub Pages

1. Create a GitHub repository named:

```text
cinderella-dub-collection
```

2. Upload the project files.

3. Put authorized MP4 files in:

```text
media/
```

4. Make sure the filenames match the URLs in `movies.json`.

5. Open:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
```

6. Select:

```text
main
/
```

7. Save.

The site will be available at:

```text
https://YOUR-USERNAME.github.io/cinderella-dub-collection/
```

## GitHub Codespaces

Open the repository in GitHub Codespaces.

Then run a local HTTP server.

For example:

```bash
python3 -m http.server 8000
```

Open the forwarded port in Codespaces.

The application should load:

```text
index.html
→ app.js
→ movies.json
→ MP4 files
```

## Important

GitHub repositories and GitHub Pages are not suitable for hosting very large
video collections in many cases.

Check GitHub's current storage, bandwidth, and acceptable-use limits before
uploading large MP4 files.

For large authorized media collections, consider storing the videos on a
dedicated object-storage/CDN service and keeping only the metadata and web
application in this repository.

Only host or distribute video files for which you have the necessary rights,
licenses, or permission.

## Updating the Collection

Edit:

```text
movies.json
```

and add another language:

```json
{
  "name": "Example Language",
  "slug": "example-language",
  "url": "https://example.com/cinderella-1950-example-language.mp4"
}
```

No JavaScript changes are required.

## Local Development

Because the application uses `fetch("movies.json")`, use an HTTP server
instead of opening `index.html` directly with `file://`.

Example:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

# Media

Place authorized MP4 files in this directory.

Expected filenames:

```text
cinderella-1950-albanian.mp4
cinderella-1950-arabic.mp4
cinderella-1950-bengali.mp4
cinderella-1950-bulgarian.mp4
cinderella-1950-cantonese.mp4
cinderella-1950-croatian.mp4
cinderella-1950-czech.mp4
cinderella-1950-danish.mp4
cinderella-1950-dutch.mp4
cinderella-1950-finnish.mp4
cinderella-1950-french.mp4
cinderella-1950-german.mp4
cinderella-1950-greek.mp4
cinderella-1950-hebrew.mp4
cinderella-1950-hindi.mp4
cinderella-1950-hmong.mp4
cinderella-1950-hungarian.mp4
cinderella-1950-icelandic.mp4
cinderella-1950-indonesian.mp4
cinderella-1950-italian.mp4
cinderella-1950-japanese.mp4
cinderella-1950-kazakh.mp4
cinderella-1950-khmer.mp4
cinderella-1950-korean.mp4
cinderella-1950-kurdish.mp4
cinderella-1950-malay.mp4
cinderella-1950-mandarin-chinese.mp4
cinderella-1950-mizo.mp4
cinderella-1950-norwegian.mp4
cinderella-1950-persian.mp4
cinderella-1950-polish.mp4
cinderella-1950-portuguese.mp4
cinderella-1950-romanian.mp4
cinderella-1950-russian.mp4
cinderella-1950-serbian.mp4
cinderella-1950-slovak.mp4
cinderella-1950-spanish.mp4
cinderella-1950-swedish.mp4
cinderella-1950-tamil.mp4
cinderella-1950-teochew.mp4
cinderella-1950-thai.mp4
cinderella-1950-turkish.mp4
cinderella-1950-ukrainian.mp4
cinderella-1950-uyghur.mp4
cinderella-1950-vietnamese.mp4
````

These filenames correspond to the URLs in `movies.json`.

Only add media that you are authorized to host and distribute.

```
```
