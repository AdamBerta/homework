import classes from './Button.module.scss';

const Button: React.FC<{ disabled: boolean, onClickHandler : (args ?: string) => void}> = (props) => {
    return <button disabled={props.disabled} onClick={() => {props.onClickHandler()}} className={classes.button}>{props.children}</button>
};

export default Button;