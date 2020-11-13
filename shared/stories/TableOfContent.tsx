import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { createComponentStyles, ThemingParameters } from '@ui5/webcomponents-react-base';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';

const styles = {
  header: {
    width: '100%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '24px',
    '@media(min-width:1330px)': {
      display: 'none'
    }
  },
  toc: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    backgroundColor: 'white',
    '& *': {
      textDecorationLine: 'none',
      listStyle: 'none'
    },
    '@media(max-width:1329px)': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      '& .toc-link': {
        textShadow: ThemingParameters.sapContent_TextShadow,
        color: ThemingParameters.sapLinkColor,
        '&:hover': {
          color: ThemingParameters.sapLink_Hover_Color
        },
        '&:active': {
          color: ThemingParameters.sapLink_Active_Color
        }
      },
      '& .toc-list-item': {
        margin: '4px 0'
      },
      '& .is-active-link': {
        fontWeight: 400,
        '&::before': {
          content: 'none'
        }
      }
    },
    '@media(min-width:1330px)': {
      overflow: 'hidden',
      width: '200px',
      position: 'fixed',
      top: 75,
      right: 6,
      '& > .toc-list': {
        paddingLeft: '10px'
      },
      '& .toc-list-item': {
        margin: '2px 0'
      },
      '& .toc-link::before': {
        width: '4px'
      },
      '& .is-active-link': {
        '&::before': {
          backgroundColor: '#0a6ed1'
        }
      }
    }
  }
};
const useStyles = createComponentStyles(styles, { name: 'TableOfContent' });

export const TableOfContent = () => {
  const classes = useStyles();
  return (
    <>
      <h3 className={classes.header}>Contents</h3>
      <div className={`js-toc ${classes.toc}`} />
    </>
  );
};

TableOfContent.displayName = 'TableOfContent';
