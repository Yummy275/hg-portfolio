import React from 'react';
import styled from 'styled-components';
import FadeShiftIn from './FadeShiftIn';

const ContactOption = styled.div`
    margin: 2rem 0;
    color: white;
`;

const OptionsHolder = styled.div`
    text-align: center;
    opacity: 0;
    animation: ${FadeShiftIn('-30px', '15px')} 0.3s 0.8s ease-in forwards;
`;

const Link = styled.a`
    cursor: pointer;
    margin-top: '.5rem';
    color: white;
`;

const ContactInfo = () => {
    return (
        <OptionsHolder>
            <ContactOption>
                {`Email: `}
                <Link href="mailto:htgonzalez27@gmail.com">
                    htgonzalez27@gmail.com
                </Link>
            </ContactOption>
            <ContactOption>
                {`Github: `}
                <Link target="_blank" href="https://github.com/Yummy275">
                    Yummy275
                </Link>
            </ContactOption>
            <ContactOption>
                {`LinkedIn: `}
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/humberto-gonzalez275/"
                >
                    Humberto Gonzalez
                </Link>
            </ContactOption>
        </OptionsHolder>
    );
};

export default ContactInfo;
