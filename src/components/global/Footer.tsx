import { useTranslation } from "react-i18next";

import { Subtitle } from "./Typography/Typographies";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col text-center pb-4">
      <Subtitle>{t("footer.top")}</Subtitle>
      <Subtitle i18nKey="footer.bottom" />
    </div>
  );
};

export default Footer;
