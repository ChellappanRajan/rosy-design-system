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
