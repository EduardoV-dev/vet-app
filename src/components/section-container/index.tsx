import { animated, config, useSpring } from 'react-spring';

interface IProps {
    children: React.ReactNode;
    /** Section title, the upper title */
    title: string;
    /** Section subtitle, the one that is below the title */
    subtitle: string;
    /** The highlighted text inside the subtitle */
    subtitleHightlightedText: string;
}

const SectionContainer = ({
    children,
    title,
    subtitle,
    subtitleHightlightedText,
}: IProps): JSX.Element => {
    /* --- Animations --- */

    const spring = useSpring({
        from: { y: 50, opacity: 0, scale: 0 },
        to: { y: 0, opacity: 1, scale: 1 },
        config: config.gentle,
    });

    return (
        <animated.section style={spring} className="flex flex-col items-center">
            <h2>{title}</h2>
            <h3>
                {subtitle}{' '}
                <span className="highlight">{subtitleHightlightedText}</span>
            </h3>
            {children}
        </animated.section>
    );
};

export default SectionContainer;
