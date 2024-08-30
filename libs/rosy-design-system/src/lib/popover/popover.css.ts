import {css} from 'lit';


export const styles = css`
.btn{
  anchor-name: --popover-trigger-element;
}
::backdrop {
  // background: rgba(0, 0, 0, 0.5);
  // backdrop-filter: blur(3px);
}
:popover-open {
  min-width: 360px;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, .15), 0 1px 2px 0 rgba(0, 0, 0, .3);
  margin:0;
  height:100px;
  // background-color:#e9eef6;
  background-color:#fff;
  display: flex;
  padding: 1rem;
  height:100px;
  border:none;
  inset:auto;
  position:absolute;
  flex-direction:column;
  gap:0.5rem;
  border-radius:10px;
//   bottom:anchor(--popover-trigger-element top);
//   right:anchor(--popover-trigger-element right);
  position-anchor:--popover-trigger-element;
}
:host([position="center-right"]){
  & :popover-open{
  top: anchor(--popover-trigger-element center);
  left: anchor(--popover-trigger-element right);
  }

}
.header{
  display: flex;
    justify-content: space-between;
    align-items: center;
    // padding:0.5rem;
}
h2{
  margin:0;
}
main{
}
.close-button{
    border: none;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

