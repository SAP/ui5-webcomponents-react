import type { Meta, StoryObj } from '@storybook/react';
import hintIcon from '@ui5/webcomponents-icons/dist/hint.js';
import leadIcon from '@ui5/webcomponents-icons/dist/lead.js';
import productIcon from '@ui5/webcomponents-icons/dist/product.js';
import { useState } from 'react';
import { ButtonDesign } from '../../enums/ButtonDesign.js';
import { MessageStripDesign } from '../../enums/MessageStripDesign.js';
import { WrappingType } from '../../enums/WrappingType.js';
import { Button } from '../Button/index.js';
import { CheckBox } from '../CheckBox/index.js';
import { Input } from '../Input/index.js';
import { Label } from '../Label/index.js';
import { MessageStrip } from '../MessageStrip/index.js';
import { Title } from '../Title/index.js';
import { WizardStep } from '../WizardStep/index.js';
import { Wizard } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Wizard',
  component: Wizard,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    style: {
      height: '400px'
    }
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof Wizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [selected, setSelected] = useState('1');
    const [disabled, setDisabled] = useState<Record<string, boolean>>({ '2': true, '3': true, '4': true });
    const [hidden, setHidden] = useState<Record<string, boolean>>({ step3Btn: true, finalizeBtn: true });
    const goToStep2 = () => {
      setDisabled((prev) => {
        const { '2': _omit, ...rest } = prev;
        return rest;
      });
      setSelected('2');
    };
    const goToStep3 = () => {
      setDisabled((prev) => {
        const { '3': _omit, ...rest } = prev;
        return rest;
      });
      setSelected('3');
    };
    const handleStep2Completed = (e) => {
      if (e.target.checked) {
        setHidden((prev) => {
          const { step3Btn: _omit, ...rest } = prev;
          return rest;
        });
      }
    };
    const finalizeWizard = () => {
      alert('Wizard is now completed!');
    };
    const handlePriceInput = (e) => {
      if (e.target.value) {
        setHidden((prev) => {
          const { finalizeBtn: _omit, ...rest } = prev;
          return rest;
        });
      }
    };
    const handleStepChange = (e) => {
      setSelected(e.detail.step.dataset.step);
      args.onStepChange(e);
    };

    return (
      <Wizard {...args} onStepChange={handleStepChange}>
        <WizardStep icon={productIcon} titleText="Product Type" selected={selected === '1'} data-step={'1'}>
          <Title>1. Product Type</Title>
          <MessageStrip design={MessageStripDesign.Information}>
            The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work
            with.
          </MessageStrip>
          <Label wrappingType={WrappingType.None}>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada
            diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque
            sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula.
            Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis
            felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget,
            dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo
            eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
          </Label>
          <Button design={ButtonDesign.Emphasized} onClick={goToStep2}>
            Step 2
          </Button>
        </WizardStep>
        <WizardStep
          icon={hintIcon}
          titleText="Product Information"
          disabled={disabled['2']}
          selected={selected === '2'}
          data-step={'2'}
        >
          <Title>2. Product Information</Title>
          <Label wrappingType={WrappingType.None}>
            Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
            Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
            vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
            molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit
            amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a
            turpis a, molestie aliquet dui. Donec pulvinar, sapien
          </Label>
          <CheckBox onChange={handleStep2Completed} text="Step Completed" />
          <br />
          {!hidden['step3Btn'] && (
            <Button design={ButtonDesign.Emphasized} onClick={goToStep3}>
              Step 3
            </Button>
          )}
        </WizardStep>
        <WizardStep
          icon={leadIcon}
          titleText="Pricing"
          disabled={disabled['3']}
          selected={selected === '3'}
          data-step={'3'}
        >
          <Title>3. Pricing</Title>
          <Label wrappingType={WrappingType.None}>
            Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
            Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
            vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
            molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit
            amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a
            turpis a, molestie aliquet dui. Donec pulvinar, sapien
          </Label>
          <Input placeholder="Item Price" onInput={handlePriceInput} />
          <br />
          {!hidden['finalizeBtn'] && (
            <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard}>
              Finalize
            </Button>
          )}
        </WizardStep>
      </Wizard>
    );
  }
};
