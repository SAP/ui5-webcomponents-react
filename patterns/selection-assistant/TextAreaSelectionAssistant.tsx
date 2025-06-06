import getElementSelection from '@ui5/webcomponents-base/dist/util/SelectionAssistant.js';
import ai from '@ui5/webcomponents-icons/dist/ai.js';
import type { ButtonDomRef, TextAreaPropTypes } from '@ui5/webcomponents-react';
import { Button, TextArea, Label, Toast } from '@ui5/webcomponents-react';
import type { CSSProperties } from 'react';
import { useRef, useState } from 'react';
import { SelectionAssistantContainer } from '@/patterns/selection-assistant/SelectionAssistantContainer.js';

type ElementSelection = ReturnType<typeof getElementSelection>;

export function TextAreaSelectionAssistant() {
  const containerRef = useRef<HTMLDivElement>(null); // Needed to calculate container-relative coordinates
  const buttonRef = useRef<ButtonDomRef>(null);
  const [showBtn, setShowBtn] = useState(false);
  const [btnStyle, setBtnStyle] = useState<CSSProperties>({});
  const [toastText, setToastText] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const repositionButtonAtTextArea = (inputRect: DOMRect, containerRect: DOMRect) => {
    setBtnStyle({
      // Subtract containerRect to make coordinates relative to the container
      // This subtraction is only needed if the container is not the viewport
      // If positioned relative to body (i.e., viewport), you can use inputRect.left/top directly
      left: `${inputRect.left - containerRect.left + inputRect.width + 4}px`,
      top: `${inputRect.top - containerRect.top}px`,
    });
    setShowBtn(true);
  };

  const repositionButtonAtSelection = (selectionRect: ElementSelection, containerRect: DOMRect) => {
    setBtnStyle({
      // If positioned relative to body (i.e., viewport), you can use selectionRect.left/top directly
      left: `${selectionRect.left - containerRect.left + selectionRect.width}px`,
      top: `${selectionRect.top - containerRect.top + selectionRect.height}px`,
    });
    setShowBtn(true);
  };

  const handleSelect: TextAreaPropTypes['onSelect'] = (e) => {
    const target = e.currentTarget;
    const selectionRect = getElementSelection(target);
    const inputRect = target.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // If the selected text overflows the visible TextArea, position near full TextArea instead
    if (selectionRect.bottom > inputRect.bottom || selectionRect.right > inputRect.right) {
      repositionButtonAtTextArea(inputRect, containerRect);
    } else {
      repositionButtonAtSelection(selectionRect, containerRect);
    }
  };

  const handleBtnClick = () => {
    const selectedText = document.getSelection().toString();
    const message = `The selected text equals to: "${selectedText}"`;

    setToastText(message);
    setToastOpen(true);
  };

  return (
    <SelectionAssistantContainer ref={containerRef}>
      <Label for="ai-textarea" showColon>
        TextArea with Selection Assistant
      </Label>
      <TextArea
        id="ai-textarea"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus vehicula blandit. Morbi suscipit nunc a quam ultrices consequat. Phasellus a dapibus est. Praesent leo libero, aliquet et imperdiet et, tincidunt non enim. Aliquam et nibh efficitur libero finibus rutrum in mattis ante. Morbi convallis aliquam leo id sagittis. Morbi tempor tellus ut dictum luctus. Pellentesque viverra quam sapien, et pharetra odio viverra vitae. Vivamus mollis ac purus quis tempus. Curabitur suscipit feugiat ante a iaculis. Aliquam ut metus magna. Praesent quis pharetra tortor, tristique rhoncus ante. Curabitur quis lorem nec ligula venenatis porta. Vivamus consequat, mi tincidunt tempor dapibus, urna ipsum ultricies dolor, sit amet aliquet eros erat vitae metus. Vivamus molestie, arcu id laoreet auctor, tortor urna suscipit ex, in ultricies leo tortor in nulla. In justo neque, hendrerit et neque fermentum, ultrices aliquam enim. Morbi quis urna cursus, varius massa at, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus dolor vitae bibendum bibendum. Curabitur ullamcorper magna sem, in dignissim velit fermentum vel. In vel ipsum tristique, sodales enim ac, tristique tellus. Curabitur eget lectus sapien. Praesent sit amet sagittis diam. Pellentesque quis scelerisque leo. Phasellus a arcu volutpat, ullamcorper risus vel, gravida justo. Nullam blandit turpis ligula, et faucibus dolor venenatis vitae. Donec at odio ut libero imperdiet tristique sed id erat. In sed sapien a ligula porta porta eget in justo. In dictum rhoncus mattis. Pellentesque eu feugiat ante. Phasellus in imperdiet eros. Aliquam eget luctus augue. Vestibulum posuere mattis tincidunt. Pellentesque congue laoreet purus, in commodo dui porttitor vel. Phasellus neque ipsum, tristique eu ornare quis, semper nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus velit lorem, fermentum tristique enim eu, pretium pulvinar justo. Cras vel porttitor nisi. Nam eleifend purus tortor, ac sollicitudin dolor rhoncus nec."
        onSelect={handleSelect}
        style={{ width: '80%', marginBlockEnd: '3rem' }}
        rows={5}
      />
      {showBtn && (
        <Button
          // This button is positioned absolute inside a relative container
          // If instead it were in `body`, containerRect adjustments wouldn't be needed
          style={{ position: 'absolute', zIndex: 2, ...btnStyle }}
          ref={buttonRef}
          icon={ai}
          onClick={handleBtnClick}
          onBlur={() => {
            setShowBtn(false);
          }}
        />
      )}
      <Toast
        open={toastOpen}
        onClose={() => {
          setToastOpen(false);
        }}
      >
        {toastText}
      </Toast>
    </SelectionAssistantContainer>
  );
}
