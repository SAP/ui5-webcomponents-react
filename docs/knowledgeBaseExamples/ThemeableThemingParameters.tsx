import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import React, { useEffect, useReducer, useState } from 'react';
import type { CSSProperties } from 'react';
import { MAPPED_THEMES } from '../../.storybook/utils';
import { FlexBox, FlexBoxDirection, Label, Option, Panel, Select, Text, ThemeProvider } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  rowGap: '1rem',
  columnGap: '1rem'
};

const FONTS = [];
const COLORS = [];
const OTHERS = Object.entries(ThemingParameters).filter(([key, value]) => {
  if (key.includes('Font')) {
    if (key.includes('FontUrl')) {
      return true;
    } else {
      FONTS.push([key, value]);
    }
    return false;
  }
  if (key.includes('Color') || key.includes('Shadow') || key.includes('Background') || key.includes('Chart')) {
    COLORS.push([key, value]);
    return false;
  }
  return true;
});

const getStyleFonts = (val) => {
  const style = {} as CSSProperties;
  if (val.includes('Family') || val.includes('FontUrl')) {
    style.fontFamily = val;
  } else if (val.includes('Size')) {
    style.fontSize = val;
  } else if (val.includes('Weight')) {
    style.fontWeight;
  }
  return style;
};

const getStyleColors = (val) => {
  const style = {} as CSSProperties;
  if (val.includes('Shadow')) {
    style.boxShadow = val;
  } else {
    style.backgroundColor = val;
  }
  return style;
};

interface Props {
  value: string;
  varKey: string;
  theme: string;
}

interface PropsWithStyle extends Props {
  style?: CSSProperties;
}

const VariableValue = ({ value, varKey, theme, style = {} }: PropsWithStyle) => {
  const [showCSSVars, toggleCSSVars] = useReducer((prev) => !prev, false);
  const [updatedLabel, setUpdatedLabel] = useState(
    getComputedStyle(document.documentElement).getPropertyValue(`--${varKey}`)
  );

  useEffect(() => {
    setTimeout(() => {
      setUpdatedLabel(getComputedStyle(document.documentElement).getPropertyValue(`--${varKey}`));
    }, 200);
  }, [theme]);

  return (
    <FlexBox key={varKey} direction={FlexBoxDirection.Column} style={{ width: '85%' }}>
      <Text title="Click to show CSS Variable" style={{ cursor: 'pointer', ...style }} onClick={toggleCSSVars}>
        {showCSSVars ? value : varKey}
      </Text>
      <Label>{updatedLabel}</Label>
    </FlexBox>
  );
};

const ColorVariables = (props: Props) => {
  const { varKey, value, theme } = props;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <VariableValue value={value} varKey={varKey} theme={theme} />
      <div
        style={{
          ...getStyleColors(value),
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          minWidth: '2rem',
          border: `1px solid ${ThemingParameters.sapField_BorderColor}`
        }}
      />
    </div>
  );
};

const Variables = (props: PropsWithStyle) => {
  const { varKey, value, theme, style = {} } = props;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <VariableValue value={value} varKey={varKey} style={style} them={theme} />
    </div>
  );
};

export const ThemeableCSSVars = () => {
  const [currentTheme, setCurrentTheme] = useState<string>(getTheme());
  return (
    <ThemeProvider>
      <div
        style={{
          backgroundColor: ThemingParameters.sapBackgroundColor,
          padding: '1rem',
          borderRadius: ThemingParameters.sapElement_BorderCornerRadius,
          boxShadow: ThemingParameters.sapContent_Shadow0
        }}
      >
        <Select
          onChange={(e) => {
            const theme = e.detail.selectedOption.dataset.value;
            setCurrentTheme(theme);
            setTheme(theme);
          }}
        >
          {MAPPED_THEMES.map(({ title, value }) => (
            <Option data-value={value} selected={value === currentTheme} key={value}>
              {title}
            </Option>
          ))}
        </Select>
        <br />
        <br />
        <Panel headerText="Colors & Shadows" collapsed>
          <div style={containerStyles}>
            {COLORS.map(([key, value]) => (
              <ColorVariables key={key} varKey={key} value={value} theme={currentTheme} />
            ))}
          </div>
        </Panel>
        <Panel headerText="Fonts" collapsed>
          <div style={{ ...containerStyles, gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' }}>
            {FONTS.map(([key, value]) => {
              return (
                <Variables
                  key={key}
                  varKey={key}
                  value={value}
                  style={{ ...getStyleFonts(value) }}
                  theme={currentTheme}
                />
              );
            })}
          </div>
        </Panel>
        <Panel headerText="Others" collapsed>
          <div style={containerStyles}>
            {OTHERS.map(([key, value]) => {
              return <Variables key={key} varKey={key} value={value} theme={currentTheme} />;
            })}
          </div>
        </Panel>
      </div>
    </ThemeProvider>
  );
};
