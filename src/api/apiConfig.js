const apiConfig = {
  baseUrl: "https://api.thermoviedb.org/3/",
  apiKey: "1cc28d7cb8202fa7566afa90c48b9f4",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w5000/${imgPath}`,
};

export default apiConfig;
