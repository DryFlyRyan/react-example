import languageColorMap from './languageColorMap';

const languageColorSelector = (language) => languageColorMap[language] || '#000';

export default languageColorSelector;
