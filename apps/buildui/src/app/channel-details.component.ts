import { Component, computed, effect, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddPersonIconComponent, ArrowIconComponent, BookIconComponent, ChevronDownArrowIconComponent, HashTagIconComponent, SpeakerPhoneIconComponent, TickIconComponent, VerifyIconComponent, HasTagWithSpeechBubbleIconComponent, BellIconComponent, PinIconComponent, PeopleIconComponent, InboxIconComponent, QuestionCircleIconComponent } from './icon';
import { NgClass } from '@angular/common';
// @ts-expect-error TypeScript cannot provide types based on attributes yet
import data from "./data.json" with { type: "json" };


@Component({
    selector: 'app-channel-detail',
    imports: [
        RouterOutlet,
        VerifyIconComponent,
        TickIconComponent,
        ChevronDownArrowIconComponent,
        NgClass,
        BookIconComponent,
        AddPersonIconComponent,
        SpeakerPhoneIconComponent,
        RouterLink,
        ArrowIconComponent,
        HashTagIconComponent,
        HasTagWithSpeechBubbleIconComponent,
        BellIconComponent,
        PinIconComponent,
        PeopleIconComponent,
        InboxIconComponent,
        QuestionCircleIconComponent
    ],
    styles: `:host{display:contents}`,
    template: ` @let serverData = $currentServer();
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
   
       [routerLink]="['/servers', id(),'channel', item.id ]"
       routerLinkActive="router-link-active"
        [ngClass]="{
    
      ' px-2 group rounded  mx-22 mx-2 py-1 flex items-center text-gray-300':true ,
      'text-white bg-gray-550/[0.36]':this.$sid() === item.id,
      'hover:text-gray-100 hover:bg-gray-550/[0.16]':this.$sid() !== item.id
      }"
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
        class="px-0.5 flex items-center tracking-wide text-xs font-title uppercase hover:text-gray-100"
      >
        <app-arrow-icon class="w-3 h-3 mr-0.5" />
        {{ category.label }}
      </button>

      @for(topicChannel of category.channels;track topicChannel.id){
      <div class="space-y-0.5 mt-[5px]">
        <a
       [routerLink]="['/servers', id(),'channel', topicChannel.id ]"
       [ngClass]="{' px-2 group rounded hover:text-gray-100 mx-22 mx-2 py-1 relative flex items-center ':true, 'text-white bg-gray-550/[0.36]':this.$sid() === topicChannel.id,  'hover:text-gray-100 hover:bg-gray-550/[0.16]':this.$sid() !== topicChannel.id,
        'text-gray-100':topicChannel?.unread,
        'text-gray-300': !topicChannel?.unread 
        }"
        >
          @if(topicChannel?.unread){
            <div class="absolute w-1 h-2 -left-2   rounded-r-full bg-gray-100">
            </div>
          }
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
<div class="flex-1 bg-gray-700 flex-shrink min-w-0">
  <div class="p-3 h-12 shadow-md w-full flex text-white text-lg">
    <div class="flex items-center">
    <app-hash-tag-icon class="
    w-6 h-6 mx-2 font-semibold text-gray-400" />
    General
    </div>

    
    <div class="w-px h-6 bg-white/[0.06] mx-2">
    </div>
    <div class="text-sm font-medium text-gray-200 mx-2 flex-shrink truncate min-w-0">
    Introduction to the Tailwind CSS framework and community.
    </div>
    
    
    <div class="flex items-center ml-auto">
      <button class="text-gray-200 hover:text-gray-100">
        <app-has-tag-with-speech-bubble-icon class="w-6 h-6 mx-2" />
      </button>
      <button className="text-gray-200 hover:text-gray-100">
      <app-bell-icon />
    </button>
    <button className="text-gray-200 hover:text-gray-100">
      
      <app-pin-icon class="w-6 h-6 mx-2" />
    </button>
    <button className="text-gray-200 hover:text-gray-100">
      <app-people-icon class="w-6 h-6 mx-2" />
    </button>
    <div class="mx-2 relative">
    <input placeholder="Search" class="placeholder-gray-400 px-1.5 border-none bg-gray-900 rounded w-36 h-6 font-medium text-sm"/>
    </div>
    <button className="text-gray-200 hover:text-gray-100">
     
      <app-inbox-icon class="w-6 h-6 mx-2" />
    </button>
    <button className="text-gray-200 hover:text-gray-100">

      <app-question-circle-icon class="w-6 h-6 mx-2" />
    </button>


    
    </div>
  </div>
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
  `
})
export default class ChannelDetailsComponent {
  id = input(-1);
  sid = input(-1);

  data = data;
  $id = computed(() => `${this.id()}`);  
  $sid = computed(() => +this.sid());





  $currentServer = computed(() => data[`${this.$id()}`]);

  #logger = effect(() => {
    console.log('[Channel Detail Component]',{details:this.$currentServer(),sid:this.sid(),isActive:this.sid()});
    console.log(`[Channel Detail Component]- ${this.id()}`);
  });
}
