import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import {categorys} from '../assets/jobCategory'

// import * as images from '../assets/grid';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
  },
  gridList: {
    width: "95%",
    // height: 450,
    overflowY: 'auto',
  },
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root} >
    <GridList
      cellHeight={250}
      style={styles.gridList}
      cols='3'
      className="categoryDiv"
    >
      {/* <Subheader>Job Categories</Subheader> */}
      {categorys.map((tile) => (
        <GridTile 
            //insert function to show jobs by category
          onClick={()=>(console.log(tile.img))}
          key={tile.img}
          title={tile.title}
        //   subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={require(`../assets/grid/${tile.img}`)}  />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;