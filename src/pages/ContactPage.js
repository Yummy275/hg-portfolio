import React, { useEffect, useState } from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import greenBg from '../images/green-bg.png';
import ContentHider from '../components/ContentHider';
import colors from '../util/colors';

const ContactPage = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    return (
        <ContentHider isVisible={isContentVisible}>
            <PageBackground bg={greenBg}>
                <PageContentBg bgColor={colors.greenOne}></PageContentBg>
            </PageBackground>
        </ContentHider>
    );
};

export default ContactPage;
