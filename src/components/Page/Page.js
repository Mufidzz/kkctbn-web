import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import useRouter from 'utils/useRouter';

const NODE_ENV = process.env.NODE_ENV;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const Page = props => {
    const { title, children, isProtected, keywords, description, ...rest } = props;
    const router = useRouter();

    useEffect(() => {
        if (NODE_ENV !== 'production') {
            return;
        }

        if (window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: router.location.pathname,
                page_name: title
            })
        }

    }, [title, router, isProtected]);

    return (
        <div {...rest}>
            <Helmet>
                <title>{title}</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="geo.position" content="-7.411547905008128; 111.50719000000002"/>
                <meta name="geo.placename" content="UMM - Universitas Muhammadiyah Malang"/>
                <meta name="geo.region" content="(+62) 341"/>
                <meta name="author" content="Mufid Zukhruf, Dwiky, Daffa, Felix"/>
                <meta name="keywords" content={keywords}/>
                <meta name="description" content={description}/>
            </Helmet>
            {children}
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isProtected: PropTypes.bool,
    keyword : PropTypes.string,
    description : PropTypes.string
}

export default Page;