

border-image-source - source of the image

border-image-slice - slicing process creates nine regions 4 edge 4 corners and middle regions, middle ignored unless we say use it(fill)

Example:

border-image-slice: 30;



border-image-width - how thickness the border should be


border-image-outset - stick beyond the frame



Basic eaxmple


  div {
      width: 150px;
      height: 100px;
      border: 10px solid transparent; /* Define the frame */
      border-image-source: url('https://via.placeholder.com/200x200'); /* Use a sticker */
      border-image-slice: 40; /* Cut 40px inward to use the border part */
      border-image-width: 20px; /* Make the border 20px thick */
      border-image-outset: 5px; /* Let the border stick out 5px */
    }