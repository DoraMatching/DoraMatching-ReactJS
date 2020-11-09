import React from 'react';
import { Tab } from 'semantic-ui-react';
import Class from '../CardClasses/Class';
import Schedule from '../Schedule/Schedule';
import styles from './CardProfile.module.scss';

const panes = [
  {
    menuItem: 'Blogs',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Questions',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Classes',
    render: () => <Tab.Pane attached={false}><Class /> </Tab.Pane>,
  },
  {
    menuItem: 'Schedule',
    render: () => <Tab.Pane attached={false}><Schedule /> </Tab.Pane>,
  },
]

const CardProfileRight = () => <Tab menu={{ secondary: true }} panes={panes} />

export default CardProfileRight;