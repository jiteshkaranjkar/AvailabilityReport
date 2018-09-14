import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import StorageIcon from '@material-ui/icons/Storage';
import DomainIcon from '@material-ui/icons/Domain';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ReportIcon from '@material-ui/icons/Report';
import PagesIcon from '@material-ui/icons/Pages';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon on/>
      </ListItemIcon>
      <ListItemText primary="Offices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Employee Types" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Levels" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DomainIcon />
      </ListItemIcon>
      <ListItemText primary="Business Units" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Offices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PagesIcon />
      </ListItemIcon>
      <ListItemText primary="Service Areas" />
    </ListItem>
  </div>
);