import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

(function () {
	Promise.all([
		Icon.getImageSource('home', 11),
		Icon.getImageSource('image', 11),
		Icon.getImageSource('rss-square', 11),
	]).then(async (values) => {
		global.icons = values;
	});
})();
