import classes from "./Card.module.css";

function Card(props) {
  return (
    <li
      className={classes["display-card"]}
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className={classes.about}>
        <h3
          className={classes.title}
          style={{
            color: props.titleColor,
          }}
        >
          {props.title}
        </h3>
        <p
          className={classes.description}
          style={{
            color: props.descriptionColor,
          }}
        >
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default Card;
