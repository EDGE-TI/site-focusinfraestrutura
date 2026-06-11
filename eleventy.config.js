module.exports = function(eleventyConfig) {
    // Copia a pasta assets original direto para a pasta final (_site/assets)
    eleventyConfig.addPassthroughCopy("assets");
    // Se você tiver uma pasta para imagens separada fora de assets (ex: img/), copie também:
    // eleventyConfig.addPassthroughCopy("img");

    // Ajusta o Eleventy para entender o subcaminho do GitHub Pages
    return {
        pathPrefix: "/site-focusinfraestrutura/"
    };
};