/* eslint-disable import/no-extraneous-dependencies */
const tailwindcss = require('tailwindcss');
const autoprefexir = require('autoprefixer');

module.exports = {
	plugins: [tailwindcss('./tailwind.config.cjs'), autoprefexir],
};
