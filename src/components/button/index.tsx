import cn from 'classnames';

interface IProps {
    children: React.ReactNode;
    type: 'button' | 'submit';
    className?: string;
    color?: 'none' | 'bluelish' | 'red';
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    rounded?: boolean;
}

const Button = ({
    className = '',
    color = 'none',
    disabled = false,
    fullWidth = false,
    rounded = false,
    ...rest
}: IProps): JSX.Element => {
    /* ClassNames */

    const classes: string = cn('font-bold uppercase py-2 px-10', className, {
        'bg-blue-700 hover:bg-blue-600': color === 'bluelish',
        'bg-red-700 hover:bg-red-600': color === 'red',
        'text-white transition active:scale-95': color,
        'rounded-lg': rounded,
        'w-full': fullWidth,
        'opacity-60': disabled,
    });

    return <button {...rest} className={classes} />;
};

export default Button;
