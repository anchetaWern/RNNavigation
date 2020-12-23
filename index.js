import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Loading from './src/screens/Loading';

import './loadIcons';

Navigation.registerComponent(`LoadingScreen`, () => Loading);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'LoadingScreen',
			},
		},
	});
});
