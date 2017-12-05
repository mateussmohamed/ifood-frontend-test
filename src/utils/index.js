export const convertToHumanTime = (duration) => {
  let s = parseInt((duration / 1000) % 60, 10);
  const m = parseInt((duration / (1000 * 60)) % 60, 10);
  s = s < 10 ? `0${s}` : s;
  return `${m}:${s}`;
};

export const getLabels = track => ({
  title: track.name,
  artist: track.artists.map(art => art.name).join(','),
  album: track.album.name,
  duration: convertToHumanTime(track.duration_ms),
});


export const parseFilter = (id, value) => ({ [id]: value });
