import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import Class from '../components/Classes/Class';
import Post from '../components/Posts/Post';
import Question from '../components/Questions/Question';
import styles from '../styles/Home.module.css'


export default class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <Grid columns="equal" className={styles.homeGrid}>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Question />
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
