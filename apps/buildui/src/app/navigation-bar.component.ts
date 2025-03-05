import { NgClass } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    imports: [RouterLink, NgClass],
    encapsulation: ViewEncapsulation.None,
    template: `
    <a class="group relative " [routerLink]="to()">
      <div
        [ngClass]="{
          ' flex -left-3 h-full items-center absolute': true,
         
        }"
      >
        <div
          [ngClass]="{
            'opacity-0 group-hover:opacity-100 origin-left 
        scale-0 group-hover:scale-100': !active(),
            'w-1 rounded-r bg-white duration-200 transition-all': true,
            'h-10': active(),
            'h-5': !active()
          }"
        ></div>
      </div>
      <div
        [ngClass]="{
          'group-active:-translate-y-px':true,
        'bg-brand text-white rounded-2xl': active(),
        'text-lg transition-all h-12 w-12  flex items-center justify-center overflow-hidden 
        ':true,
        'group-hover:bg-brand bg-gray-700 rounded-3xl group-hover:text-white duration-200 
      group-hover:rounded-2xl':!active(),
      }
      "
      >
        <ng-content>
          <svg
            class="w-[30px] h-[30px]"
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
              class=""
            ></path>
          </svg>
        </ng-content>
      </div>
    </a>
  `
})
export class NavigationBarComponent {
  to = input('');
  active = input(false);

  // #logger = effect(()=>{
  //   console.log(this.active(),this.path,this.to(),'[Effect]');
  // })
}
