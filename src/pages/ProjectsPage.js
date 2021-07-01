import React, { useEffect, useState } from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import redBg from '../images/red-bg.png';
import ContentHider from '../components/ContentHider';

import colors from '../util/colors';

const ProjectsPage = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    return (
        <ContentHider isVisible={isContentVisible}>
            <PageBackground bg={redBg}>
                <PageContentBg bgColor={colors.redOne}></PageContentBg>
            </PageBackground>
        </ContentHider>
    );
};

export default ProjectsPage;
