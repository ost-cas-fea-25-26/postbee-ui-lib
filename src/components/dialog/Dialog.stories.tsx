import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from './Dialog';
import { Button } from '../buttons';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=413-288&t=qxxR9geJaxBCzsRu-4',
    },
  },
  argTypes: {
    title: { control: 'text' },
    width: {
      control: 'radio',
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    title: 'Profil speichern',
    width: 'md',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open me</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={() => {
            alert('Gespeichert!');
            setOpen(false);
          }}
        >
          <p className="mb-sm">Änderungen an deinem Profil werden gespeichert. Bitte überprüfe deine Eingaben.</p>
          <p>Durch das Speichern bestätigst du, dass alle Angaben korrekt sind.</p>
        </Dialog>
      </>
    );
  },
};
