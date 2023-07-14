import React from 'react';
import store from "@/store";
import $config from "@/lib/config";
import {useTranslation} from "next-i18next";

const Footer = () => {
    const { t } = useTranslation()

    return <footer className="footer">
        <div className="footer__container">
            <div className="footer__text">
                © {new Date().getFullYear()} {store.options.title} {t('copyright')}.
            </div>
            {store.hasModule($config.modules.social) && <div className="footer__social social">
                {store.getModule($config.modules.social).links.map((link,i) => (
                    <a key={'link-'+i} href={link.url} className="social__link">{$config.socialIcons[link.type]}</a>
                ))}
            </div>}
        </div>
    </footer>;
};

export default Footer;