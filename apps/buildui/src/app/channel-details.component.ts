import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { VerifyIconComponent, TickIconComponent, ChevronDownArrowIconComponent, BookIconComponent, AddPersonIconComponent, SpeakerPhoneIconComponent, ArrowIconComponent, HashTagIconComponent } from './icon';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import data from "./data.json" with {type: "json"}

const SERVERS = {
  '2': 'Tailwind CSS',
  '1': 'Next JS',
  '0': 'Mirage'
}

@Component({
  selector: 'app-channel-detail',
  imports: [
    RouterOutlet,
    VerifyIconComponent,
    TickIconComponent,
    ChevronDownArrowIconComponent,
    BookIconComponent,
    AddPersonIconComponent,
    SpeakerPhoneIconComponent,
    RouterLink,
    ArrowIconComponent,
    HashTagIconComponent
  ],
  styles: `:host{display:contents}`,
  template: 
  ` @let serverData = $currentServer();
<div class="w-60 bg-gray-800 flex-col flex">
  <div
    class="p-3 h-12 shadow-md w-full text-white text-lg hover:bg-gray-550/[0.16] flex items-center"
  >
    <div class="flex gap-1 font-title items-center w-full">
      <div class="flex relative items-center">
        <div class="w-4 h-4 mr-1">
          <app-verify-icon class="w-4 h-4 absolute" />
          <app-tick-icon class="absolute w-4 h-4" />
        </div>

        {{ id() > -1 ? serverData.label : 'Dashboard' }}
      </div>
      <app-chevron-down-icon class="w-4 ml-auto" />
    </div>
  </div>
  <div class="flex-1 text-gray-300 overflow-y-scroll font-medium mt-[17px]">
    @for (category of serverData.categories; track $index) { @if (category.id
    === 1) {
    <div class="space-y-0.5">
      @for (item of category.channels; track $index) {
      <a
   
       [routerLink]="['/servers', id(),'channel', $index ]"
       routerLinkActive="router-link-active"
        class="hover:bg-gray-550/[0.16] px-2 group rounded hover:text-gray-100 mx-22 mx-2 py-1 flex items-center text-gray-300"
      >
        @switch(item.icon){ @case ("Book") {
        <app-book-icon class="w-5 h-5 mr-1.5 text-gray-400" />
        } @default {
        <app-speaker-phone-icon class="w-5 h-5 mr-1.5 text-gray-400" />
        } }

        {{ item.label }}
        <app-add-person-icon
          class="opacity-0 hover:bg-gray-100 group-hover:opacity-100 w-4 h-4 ml-auto text-gray-200"
        />
      </a>
      }
    </div>

    } @if(category.id > 1){
    <div class="mt-[21px]">
      <button
        class="px-0.5 flex items-center tracking-wide text-xs font-title uppercase"
      >
        <app-arrow-icon class="w-3 h-3 mr-0.5" />
        {{ category.label }}
      </button>

      @for(topicChannel of category.channels;track topicChannel.id){
      <div class="space-y-0.5 mt-[5px]">
        <a
          href="#"
          class="hover:bg-gray-550/[0.16] px-2 group rounded hover:text-gray-100 mx-22 mx-2 py-1 flex items-center text-gray-300"
        >
          <app-hash-tag-icon class="w-5 h-5 mr-1.5 text-gray-400" />
          {{ topicChannel.label }}
          <app-add-person-icon
            class="opacity-0 hover:bg-gray-100 group-hover:opacity-100 w-4 h-4 ml-auto text-gray-200"
          />
        </a>
      </div>
      }
    </div>
    } }
  </div>
</div>
<div class="flex-1 bg-gray-600">
  <div class="p-3 h-12 shadow-md w-full text-white text-lg">General</div>
  <div class="flex-1 p-3">
    <p class="text-white">
      Channel Component {{ id() }}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit
      nulla dolorum nobis, eos atque cum voluptas architecto deleniti harum nemo
      nisi perspiciatis consectetur quidem, sint consequatur. Explicabo,
      architecto inventore?
    </p>
  </div>
</div>
  `,
  standalone: true,
})
export default class ChannelDetailsComponent {
  router = inject(Router);
  id = input(-1);
  data = data;
  $id = computed(() => `${this.id()}`)

  $currentServer = computed(() => data[`${this.$id()}`]);

  #logger = effect(() => {
  console.log('[Channel Detail Component]',{currentServer:this.$currentServer()});
    console.log(`[Channel Detail Component]- ${this.id()}`);
  });
  serverNames: Record<string, string> = SERVERS;
}
