import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buildui';
  nums = [...Array(30)];
}

//cw - delete word in insert mode
//dw - delete word in visual mode
//ci - change inside
//ca - change around
//di - delete inside
//da - delete around
//E- end of word
//w - start of word
//cit - change inside tag
//cat - change around tag
//va' or ] or anythin
//p - put in below-if we do inline it will be in before or after
//P - put in above

//Change surround not working
//cs"` - working
//cst - change surroundings tag left shift+[,<],
