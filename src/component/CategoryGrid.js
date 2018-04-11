import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "85%",
    // height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '/nurse.jpg',
    title: 'Outdoor',
    author: 'jill111',
  },
  {
    img: '/Users/Josiahsingh/Desktop/InstrumHack/src/assets/grid/kitchen.jpg',
    title: 'IT',
    author: 'Danson67',
  },
  {
    img: '',
    title: 'Home',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Care',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Social',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Sports',
    author: 'jill111',
  },

];



/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {/* <Subheader>Job Categories</Subheader> */}
      {tilesData.map((tile) => (
        <GridTile
            //insert function to show jobs by category
          onClick={()=>(console.log(tile.img))}
          key={tile.img}
          title={tile.title}
        //   subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={`../assets/grid/${tile.img}`} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;