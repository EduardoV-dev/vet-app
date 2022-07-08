interface IProps {
    /** The content that will be rendered inside the card */
    children: React.ReactNode;
    /** ClassName prop */
    className?: string;
    /** CSS Properties */
    style?: React.CSSProperties;
}

const Card = ({ className = '', ...rest }: IProps): JSX.Element => (
    <section
        {...rest}
        className={`py-8 px-4 shadow-md w-9/12 mx-auto bg-white mt-10 ${className}`}
    />
);

export default Card;
