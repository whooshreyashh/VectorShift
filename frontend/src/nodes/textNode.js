import {
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';

import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';

      const newHeight = Math.min(
        textareaRef.current.scrollHeight,
        220
      );

      textareaRef.current.style.height =
        `${newHeight}px`;
    }
  }, [currText]);

  const variables = useMemo(() => {
    const regex =
      /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const matches = [];
    let match;

    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]);
    }

    return [...new Set(matches)];
  }, [currText]);

  const nodeWidth = 340;

  const lineCount = Math.max(
    currText.split('\n').length,
    Math.ceil(currText.length / 40)
  );

  const nodeHeight = Math.min(
    350,
    Math.max(
      140,
      120 + lineCount * 25
    )
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      width={nodeWidth}
      minHeight={nodeHeight}
      inputs={variables.map((variable) => ({
        id: variable,
      }))}
      outputs={[
        {
          id: 'output',
        },
      ]}
    >
      <label>
        Text:
      </label>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) =>
          setCurrText(e.target.value)
        }
        style={{
          width: '100%',
          resize: 'none',
          minHeight: '80px',
          maxHeight: '220px',
          overflowY: 'auto',
        }}
      />

      {variables.length > 0 && (
        <div
          style={{
            fontSize: '12px',
            color: '#64748B',
            wordBreak: 'break-word',
          }}
        >
          Variables: {variables.join(', ')}
        </div>
      )}
    </BaseNode>
  );
};