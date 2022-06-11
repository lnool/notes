import { changeLang } from '../utils/lang';

import jsLocale from '../i18n/pages/javascript.json';
import cssLocale from '../i18n/pages/css.json';
import css3Locale from '../i18n/pages/css3.json';

function getGuideSidebar(locale) {
  return Object.fromEntries(
    Object.entries(locale).map(([lang, val]) => [
      lang,
      Object.values(val).map(item => mapPrefix(item, lang)),
    ])
  );
}

const getSidebars = () => ({
  '/javascript/': getGuideSidebar(jsLocale),
  '/css/': getGuideSidebar(cssLocale),
  '/css3': getGuideSidebar(css3Locale),
});

type Item = {
  text: string;
  children?: Item[];
  link?: string;
};

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map(child => mapPrefix(child, lang, prefix)),
    };
  }

  return {
    ...item,
    link: `${changeLang(lang)}${prefix}${item.link}`,
  };
}

export default getSidebars();
