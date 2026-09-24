document.addEventListener('DOMContentLoaded', async () => {
  const movieTitle = document.getElementById('movie-title');
  const movieSummary = document.getElementById('movie-summary');
  const metaMovie = document.getElementById('meta-movie');
  const metaYear = document.getElementById('meta-year');
  const metaStudio = document.getElementById('meta-studio');
  const metaCategory = document.getElementById('meta-category');
  const languageSelector = document.getElementById('language-selector');
  const videoPlayer = document.getElementById('video-player');
  const videoSource = document.getElementById('video-source');
  const downloadLink = document.getElementById('download-link');
  const openLink = document.getElementById('open-link');

  try {
    const response = await fetch('movies.json');
    if (!response.ok) {
      throw new Error(`Failed to load movie data: ${response.status}`);
    }

    const data = await response.json();
    const movie = data.movie || 'Cinderella';
    const year = data.year || '1950';
    const studio = data.studio || 'Walt Disney Productions';
    const category = data.category || 'Animated Feature';
    const languages = Array.isArray(data.languages) ? data.languages : [];

    movieTitle.textContent = movie;
    movieSummary.textContent = `${category} • ${year} • ${studio}`;
    metaMovie.textContent = movie;
    metaYear.textContent = year;
    metaStudio.textContent = studio;
    metaCategory.textContent = category;

    if (!languages.length) {
      languageSelector.innerHTML = '<option value="">No languages available</option>';
      return;
    }

    languageSelector.innerHTML = languages
      .map((language, index) => `<option value="${index}">${language.name}</option>`)
      .join('');

    const setLanguage = (index) => {
      const language = languages[index];
      if (!language) {
        return;
      }

      videoSource.src = language.url;
      videoPlayer.load();
      languageSelector.value = String(index);
      downloadLink.href = language.url;
      openLink.href = language.url;
      downloadLink.textContent = `Download ${language.name} MP4`;
      videoPlayer.play().catch(() => {});
    };

    languageSelector.addEventListener('change', (event) => {
      const index = Number(event.target.value);
      setLanguage(index);
    });

    setLanguage(0);
  } catch (error) {
    console.error(error);
    movieTitle.textContent = 'Movie data unavailable';
    movieSummary.textContent = 'Unable to load the dub collection.';
    languageSelector.innerHTML = '<option value="">Unavailable</option>';
    downloadLink.href = '#';
    openLink.href = '#';
    downloadLink.textContent = 'Download unavailable';
  }
});
