interface IProps {
    /** The content that will be rendered inside the card */
    children: React.ReactNode;
}

const Card = (props: IProps): JSX.Element => {
    return (
        <section
            {...props}
            className="py-8 px-4 shadow-md w-9/12 mx-auto bg-white mt-10"
        />
    );
};

export default Card;
