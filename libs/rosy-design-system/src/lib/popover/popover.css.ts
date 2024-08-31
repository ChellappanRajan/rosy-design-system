import {css} from 'lit';


export const styles = css`
.btn{
  width: fit-content;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, .15), 0 1px 3px rgba(0, 0, 0, .3);
    background: white;
    padding: 0.25rem 1rem;
    anchor-name: --popover-trigger-element;
}
svg{
    width: 20px;
    height: 20px;
}


:popover-open {
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, .15), 0 1px 2px 0 rgba(0, 0, 0, .3);
  margin:0;
  height:100px;
  background-color:#fff;
  display: flex;
  max-width: 200px;
  padding: 1rem;
  height:100px;
  border:none;
  inset:auto;
  position:absolute;
  flex-direction:column;
  gap:0.5rem;
  border-radius:10px;
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
p{
margin:0;
}
`;

