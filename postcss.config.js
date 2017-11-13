var autoprefixer = require('autoprefixer')({
    browsers: ["ios_saf >= 7", "android >= 4"]
});

module.exports = {
    plugins: [autoprefixer]
};
