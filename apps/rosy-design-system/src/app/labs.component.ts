import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { Avatar } from '@rosy-design-system';
import { AvatarGroup } from '@rosy-design-system';
import { SimpleSelect } from '@rosy-design-system';
import { RosyModal } from '@rosy-design-system';
@Component({
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-labs-component',
    templateUrl: './labs.component.html'
})
export default class LabsComponent {
  open = signal(false);
  imgSrc = [
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80',
  ];
  showStyle = signal(false);
  data = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ];

  onClick() {
    this.showStyle.set(!this.showStyle());
  }
}
