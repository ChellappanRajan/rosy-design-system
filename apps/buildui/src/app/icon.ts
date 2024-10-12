const template = `
<svg aria-hidden="true" role="img" viewBox="0 0 16 15.2"><path fill="rgb(35, 165, 89)" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path></svg>
`;

import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template,
  standalone: true,
})
export class VerifyIconComponent {}

const icon = `<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="rgb(255, 255, 255)" fill-rule="evenodd" d="M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" class=""></path></svg>`;

@Component({
  selector: 'app-tick-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: icon,
  standalone: true,
})
export class TickIconComponent {}

const chevron = `<svg viewBox="0 0 18 18" fill="none" >
      <path
        d="M5.20711 5.54289C4.81658 5.15237 4.18342 5.15237 3.79289 5.54289C3.40237 5.93342 3.40237 6.56658 3.79289 6.95711L5.20711 5.54289ZM9 10.75L8.29289 11.4571C8.68342 11.8476 9.31658 11.8476 9.70711 11.4571L9 10.75ZM14.2071 6.95711C14.5976 6.56658 14.5976 5.93342 14.2071 5.54289C13.8166 5.15237 13.1834 5.15237 12.7929 5.54289L14.2071 6.95711ZM3.79289 6.95711L8.29289 11.4571L9.70711 10.0429L5.20711 5.54289L3.79289 6.95711ZM9.70711 11.4571L14.2071 6.95711L12.7929 5.54289L8.29289 10.0429L9.70711 11.4571Z"
        fill="currentColor"
      />
    </svg>`;

@Component({
  selector: 'app-chevron-down-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: chevron,
  standalone: true,
})
export class ChevronDownArrowIconComponent {}

const hashTagIcon = ` <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.887 21a.5.5 0 01-.493-.587L6 17H2.595a.5.5 0 01-.492-.586l.175-1A.5.5 0 012.77 15h3.58l1.06-6H4.005a.5.5 0 01-.492-.586l.175-1A.5.5 0 014.18 7h3.58l.637-3.587A.5.5 0 018.889 3h.984a.5.5 0 01.493.587L9.76 7h6l.637-3.587A.5.5 0 0116.889 3h.984a.5.5 0 01.493.587L17.76 7h3.405a.5.5 0 01.492.586l-.175 1A.5.5 0 0120.99 9h-3.58l-1.06 6h3.405a.5.5 0 01.492.586l-.175 1a.5.5 0 01-.492.414H16l-.637 3.587a.5.5 0 01-.492.413h-.984a.5.5 0 01-.493-.587L14 17H8l-.637 3.587a.5.5 0 01-.492.413h-.984zM9.41 9l-1.06 6h6l1.06-6h-6z"
      />
    </svg>`;

@Component({
  selector: 'app-hash-tag-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: hashTagIcon,
  standalone: true,
})
export class HashTagIconComponent {}

const addPerson = `<svg viewBox="0 0 16 16" >
      <path
        fill="currentColor"
        d="M14 2h2v1h-2v2h-1V3h-2V2h2V0h1v2zM6.5 8.007a2.5 2.5 0 000-5 2.5 2.5 0 000 5zM6.5 8.34c-3.24 0-5.5 1.647-5.5 4v.667h11v-.667c0-2.36-2.26-4-5.5-4z"
      />
</svg>`;

@Component({
  selector: 'app-add-person-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: addPerson,
  standalone: true,
})
export class AddPersonIconComponent {}

const bookIcon = ` <svg viewBox="0 0 40 40" >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 34.583V7.5h2v29.167H9c-2.209 0-4-1.866-4-4.167v-25c0-2.301 1.791-4.167 4-4.167h22v27.084H9c-1.104 0-2 .931-2 2.083 0 1.151.896 2.083 2 2.083h24zM23.972 10l-8.083 7.991-3.18-3.147L10 17.506l5.889 5.827 10.778-10.666L23.972 10z"
      />
</svg>`;

@Component({
  selector: 'app-book-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: bookIcon,
  standalone: true,
})
export class BookIconComponent {}

const speakerPhoneIcon = ` <svg viewBox="0 0 24 24" >
      <path
        d="M3.9 8.26H2v7.034h1.9V8.26zM19.1 4v1.127L4.85 8.264v9.854c0 .432.296.807.72.914l3.8.94a.954.954 0 00.99-.35l2.347-3.098L19.1 17.93v1.129H21V4h-1.9zM9.218 17.994l-2.468-.611V15.21l3.92.864-1.452 1.92z"
        fill="currentColor"
      />
    </svg>`;
@Component({
  selector: 'app-speaker-phone-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: speakerPhoneIcon,
  standalone: true,
})
export class SpeakerPhoneIconComponent {}

const arrow = ` <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
      />
</svg>`;

@Component({
  selector: 'app-arrow-icon',
  styles: `
  :host{
    display:inline-block;
  }
  `,
  template: arrow,
  standalone: true,
})
export class ArrowIconComponent {}

const hourGlass = `<svg viewBox="0 0 24 24" >
      <path
        fill="currentColor"
        d="M21.707 20.293L16.314 14.9A7.928 7.928 0 0018 10a7.945 7.945 0 00-2.344-5.656A7.94 7.94 0 0010 2a7.94 7.94 0 00-5.656 2.344A7.945 7.945 0 002 10c0 2.137.833 4.146 2.344 5.656A7.94 7.94 0 0010 18a7.922 7.922 0 004.9-1.686l5.393 5.392 1.414-1.413zM10 16a5.959 5.959 0 01-4.242-1.757A5.958 5.958 0 014 10c0-1.602.624-3.109 1.758-4.242A5.956 5.956 0 0110 4c1.603 0 3.109.624 4.242 1.758A5.957 5.957 0 0116 10c0 1.603-.624 3.11-1.758 4.243A5.959 5.959 0 0110 16z"
      />
    </svg>`;

@Component({
  selector: 'app-hour-glass-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: hourGlass,
  standalone: true,
})
export class HourGlassIconComponent {}

const questionCircle = ` <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"
      />
    </svg>`;

@Component({
  selector: 'app-question-circle-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: questionCircle,
  standalone: true,
})
export class QuestionCircleIconComponent {}

const inbox = `
     <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
        fill="currentColor"
      />
    </svg>
    `;

@Component({
  selector: 'app-inbox-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: inbox,
  standalone: true,
})
export class InboxIconComponent {}

const people = `<svg viewBox="0 0 24 24"> 
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
    />
    <path
      fill="currentColor"
      d="M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1zM14.883 11.908A4.007 4.007 0 0018 8.006a4.006 4.006 0 00-3.503-3.97A5.977 5.977 0 0116 8.007a5.974 5.974 0 01-1.362 3.804c.082.032.164.064.245.098z"
    />
  </svg>
`;
@Component({
  selector: 'app-people-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: people,
  standalone: true,
})
export class PeopleIconComponent {}

const pin = `<svg viewBox="0 0 24 24" >
      <path
        fill="currentColor"
        d="M22 12l-9.899-9.899-1.415 1.413 1.415 1.415-4.95 4.949v.002L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.414L19.171 12h.001l1.414 1.414L22 12z"
      />
    </svg>`;

@Component({
  selector: 'app-pin-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: pin,
  standalone: true,
})
export class PinIconComponent {}

const bell = ` <svg viewBox="0 0 24 24" fill="none" >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9v5a3 3 0 003 3v1H3v-1a3 3 0 003-3V9a6 6 0 1112 0zm-6 12c-1.476 0-2.752-.81-3.445-2h6.89c-.693 1.19-1.97 2-3.445 2z"
      />
    </svg>`;

@Component({
  selector: 'app-bell-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: bell,
  standalone: true,
})
export class BellIconComponent {}

const hasTagWithSpeechBubble = `<svg aria-hidden="false" viewBox="0 0 24 24" fill="none" >
      <path
        fill="currentColor"
        d="M5.433 21a.12.12 0 01-.118-.141L6 17H2.143a.12.12 0 01-.118-.14l.308-1.76a.12.12 0 01.118-.1H6.35l1.06-6H3.553a.12.12 0 01-.118-.14l.308-1.76A.12.12 0 013.86 7H7.76l.692-3.901A.12.12 0 018.57 3h1.757a.12.12 0 01.118.141L9.76 7h6l.692-3.901A.12.12 0 0116.57 3h1.757a.12.12 0 01.118.141L17.76 7h3.857a.12.12 0 01.118.14l-.308 1.76a.12.12 0 01-.118.1h-3.9l-.36 2.04H15.05L15.41 9h-6l-1.06 6h2.21v2H8l-.693 3.901A.12.12 0 017.19 21H5.433z"
      />
      <path
        fill="currentColor"
        d="M13.44 12.96a.96.96 0 00-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 01.24.24v2.039a.24.24 0 00.4.178l2.446-2.21a.96.96 0 01.643-.247h4.43c.531 0 .96-.43.96-.96V13.92a.96.96 0 00-.96-.96h-9.12z"
      />
    </svg>`;

@Component({
  selector: 'app-has-tag-with-speech-bubble-icon',
  styles: `
      :host{
        display:inline-block;
      }
      `,
  template: hasTagWithSpeechBubble,
  standalone: true,
})
export class HasTagWithSpeechBubbleIconComponent {}
