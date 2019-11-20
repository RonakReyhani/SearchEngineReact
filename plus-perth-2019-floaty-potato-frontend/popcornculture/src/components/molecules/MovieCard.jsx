import React, { Component } from "react";
import ProviderItem from "./atoms/ProviderItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function MovieCard(image, title, summary, providers, ...props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component={image}
          alt="Movie Poster"
          height="140"
          image="{url}" //add image url here
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ul>
          {providers.map(item => (
            <Link to="/${item.url}">
              <ProviderItem image={item.image}></ProviderItem>
            </Link>
          ))}
        </ul>
        <Button size="small" color="primary">
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
}
