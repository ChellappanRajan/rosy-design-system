import { Component } from '@angular/core';

@Component({
  selector: 'app-discord-card',
  template: `
    <div
      class="bg-gray-700 text-white min-h-screen flex items-center justify-center"
    >
      <div class="max-w-lg">
        <div class="flex px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <img
            src="https://pbs.twimg.com/profile_images/1675132971924484096/wkkbSaiD_400x400.jpg"
            class="mr-4 w-10 h-10 rounded-full"
          />
          <div>
            <p class="flex items-baseline">
              <span class="text-green-500 mr-2 text-sm font-medium"
                >Chellappan</span
              >
              <span class="text-xs text-gray-500">12/13/1993</span>
            </p>
            <p class="tex-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              fugit doloremque illo molestiae eligendi accusantium quasi
              excepturi ratione corrupti nulla, sequi consectetur eum dolorum
              possimus totam quisquam consequatur natus praesentium?
            </p>
          </div>
        </div>
        <div class="py-1 mt-1 px-4 hover:bg-gray-800 hover:bg-opacity-30 ">
          <p class="pl-14 text-grey-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            molestias error animi dolores aliquid magnam hic beatae officiis cum
            sint possimus tenetur iusto maiores est delectus, quasi labore
            doloremque necessitatibus!
          </p>
        </div>
      </div>
    </div>
  `,
})
export class DiscordCardComponent {}
