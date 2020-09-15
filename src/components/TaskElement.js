import { html, nothing } from 'lit-html';
import { LitElement, css } from 'lit-element';

export class TaskElement extends LitElement {
  static get properties() {
    return {
      task: { type: Object },
    };
  }

  static get styles() {
    return css`
      ${this._allStyle}
      ${this._universalStyle}
      ${this._listItemStyle}
      ${this
        ._labelStyle}
      ${this._inputStyle}
      ${this
        ._titleStyle}
      ${this._actionsStyle}
      ${this
        ._archorStyle}
      ${this._iconStyle}
    `;
  }

  constructor() {
    super();
    this.task = {
      id: '',
      state: '',
      title: '',
    };
  }

  render() {
    return html`
      <div class="list-item ${this.task.state}">
        <label class="checkbox">
          <input
            type="checkbox"
            .checked=${this.task.state === 'TASK_ARCHIVED'}
            disabled="true"
            name="checked"
          />
          <span
            class="checkbox-custom"
            @click=${() => this.dispatchEvent(new CustomEvent('archiveTask'))}
          ></span>
        </label>
        <div class="title">
          <input
            type="text"
            .value=${this.task.title}
            readonly="true"
            placeholder="Input title"
          />
        </div>
        <div class="actions">
          ${this.task.state !== 'TASK_ARCHIVED'
            ? html`
                <a
                  @click=${() => this.dispatchEvent(new CustomEvent('pinTask'))}
                >
                  <span class="icon-star"></span>
                </a>
              `
            : nothing}
        </div>
      </div>
    `;
  }

  static get _allStyle() {
    return css`
      lable,
      a {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
        font-style: normal;
        font-size: 100%;
        line-height: 1;
        font-family: inherit;
      }
    `;
  }

  static get _universalStyle() {
    return css`
      * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }
    `;
  }

  static get _listItemStyle() {
    return css`
      .list-item {
        font-size: 14px;
        line-height: 20px;
        display: flex;
        flex-wrap: wrap;
        height: 3rem;
        width: 100%;
        background: white;
        transition: all ease-out 150ms;
      }
      .list-item:hover {
        background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
      }
    `;
  }

  static get _labelStyle() {
    return css`
      .checkbox {
        display: inline-block;
        height: 3rem;
        position: relative;
        vertical-align: middle;
        width: 44px;
      }
    `;
  }

  static get _inputStyle() {
    return css`
      input {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
        *vertical-align: middle;
      }
      input {
        line-height: normal;
        *overflow: visible;
      }
      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      input {
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      input[type='text'] {
        font-size: 14px;
        line-height: 20px;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        font-style: 400;
        padding: 0.75rem 0;
        line-height: 1.5rem !important;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        color: #333;
        outline: none;
      }
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
      }
      .checkbox input[type='checkbox'] {
        font-size: 1em;
        visibility: hidden;
      }
      .checkbox input[type='checkbox'] + span:before {
        position: absolute;
        top: 50%;
        right: auto;
        bottom: auto;
        left: 50%;
        width: 0.85em;
        height: 0.85em;
        transform: translate3d(-50%, -50%, 0);
        background: transparent;
        box-shadow: #2cc5d2 0 0 0 1px inset;
        content: '';
        display: block;
      }
      .checkbox input[type='checkbox']:checked + span:before {
        font-size: 16px;
        line-height: 24px;
        box-shadow: none;
        color: #2cc5d2;
        margin-top: -1px;
        font-family: 'percolate';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: '\\e65e';
      }
      .list-item input[type='text'] {
        background: transparent;
        width: 100%;
      }
      .list-item input[type='text']:focus {
        cursor: text;
      }
      .list-item.TASK_ARCHIVED input[type='text'] {
        color: #aaa;
      }
      .list-item.checked input[type='text'] {
        color: #ccc;
        text-decoration: line-through;
      }
    `;
  }

  static get _titleStyle() {
    return css`
      .list-item .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1;
      }
    `;
  }

  static get _actionsStyle() {
    return css`
      .list-item .actions {
        transition: all 200ms ease-in;
        padding-right: 20px;
      }
    `;
  }

  static get _archorStyle() {
    return css`
      a:focus {
        outline: thin dotted;
      }
      a:hover,
      a:active {
        outline: 0;
      }
      a {
        transition: all 200ms ease-in;
        color: #5db9ff;
        cursor: pointer;
        text-decoration: none;
      }
      a:hover {
        color: #239da8;
      }
      a:active {
        color: #555;
      }
      a:focus {
        outline: none;
      }
      .list-item .actions a {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        color: #eee;
      }
      .list-item .actions a:hover {
        color: #2cc5d2;
      }
      .list-item .actions a:active {
        color: #555;
      }
    `;
  }

  static get _iconStyle() {
    return css`
      [class^='icon-'],
      [class*=' icon-'] {
        font-family: 'percolate';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .icon-star:before {
        content: '\\e608';
      }
      .list-item .actions [class^='icon-'] {
        font-size: 16px;
        line-height: 24px;
        line-height: 3rem;
        text-align: center;
      }
      .list-item.TASK_PINNED .icon-star {
        color: #2cc5d2;
      }
    `;
  }
}
