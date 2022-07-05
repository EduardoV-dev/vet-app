import { useField, ErrorMessage } from 'formik';

interface IProps {
    /** Label's text */
    label: string;
    /** Name of the field that's going to be controlled */
    name: string;
    /** Input type for rendering different type of inputs, default value is text */
    type?: 'text' | 'email' | 'date' | 'textarea';
    /** Placeholder text for input */
    placeholder?: string;
    /** Any other DOM Props */
    [x: string]: any;
}

const Input = ({ label, ...rest }: IProps): JSX.Element => {
    /* --- Hooks --- */

    const [field] = useField(rest);

    /* --- ClassNames --- */

    const fieldClasses: string =
        'rounded p-2 border-2 mb-4 focus:border-blue-100';

    /* --- Components --- */

    const Field: JSX.Element =
        rest.type !== 'textarea' ? (
            <input {...field} {...rest} className={fieldClasses} />
        ) : (
            <textarea
                {...field}
                {...rest}
                className={`${fieldClasses} min-h-[100px] max-h-[200px]`}
            />
        );

    return (
        <div className="flex flex-col">
            <label htmlFor={rest.id || ''} className="mb-2 uppercase font-bold">
                {label}
            </label>
            {Field}
            <ErrorMessage component="span" name={rest.name} />
        </div>
    );
};

export default Input;
