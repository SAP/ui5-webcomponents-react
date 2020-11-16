import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { useEffect } from 'react';
import tocbot from 'tocbot';

const styles = {
  header: {
    width: '100%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    fontSize: '24px',
    '@media(min-width:1330px)': {
      display: 'none'
    }
  },
  fixedContainer: {
    '@media(min-width:1330px)': {
      width: '200px',
      position: 'fixed',
      top: 75,
      right: 6,
      overflow: 'hidden'
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
      '& > .toc-list': {
        paddingLeft: '10px'
      },
      '& .toc-list-item': {
        margin: '4px 0'
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

  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.sbdocs-wrapper',
      headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
      orderedList: false,
      collapseDepth: 6,
      hasInnerContainers: true
    });
    document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));
    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <>
      <h3 className={classes.header}>Contents</h3>
      <div className={classes.fixedContainer}>
        <div className={`js-toc ${classes.toc}`} />
      </div>
    </>
  );
};

TableOfContent.displayName = 'TableOfContent';
