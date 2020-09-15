import { html } from 'lit-html';
import './task-element.js';

export default {
  title: 'task',
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

const Template = args =>
  html`
    <task-element
      .task=${args.task}
      @pinTask=${args.onPinTask}
      @archiveTask=${args.onArchiveTask}
    ></task-element>
  `;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'Task_INBOX',
    updated_at: new Date(2019, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
