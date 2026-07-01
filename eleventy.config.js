module.exports = function(eleventyConfig) {
  // Garante que o CSS, JS e imagens sejam movidos
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix: "/",
    dir: {
      input: ".",        // Lê os arquivos HTML da raiz do repositório
      output: "_site"    // Cospe o resultado na pasta _site
    }
  };
};