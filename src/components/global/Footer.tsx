import { useTranslation } from 'react-i18next';

import { Subtitle } from './Typography/Typographies';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center text-center pb-8">
      <Subtitle className="max-w-90 md:max-w-100">{t('footer.top')}</Subtitle>
      <Subtitle
        className="max-w-80 text-center md:max-w-150"
        i18nKey="footer.bottom"
      />
    </div>
  );
};

export default Footer;
