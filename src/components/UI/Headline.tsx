import classes from './Headline.module.scss';

const Headline: React.FC = (props) => {
    return <h2 className={classes.headline}>{props.children}</h2>
};

export default Headline;