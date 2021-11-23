import classes from './CenterBox.module.scss';

const CenterBox: React.FC = (props) => {
    return <div className={classes.centerBox}>{props.children}</div>
};

export default CenterBox;