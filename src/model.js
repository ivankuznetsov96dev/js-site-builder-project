import image from "./assets/image.png";
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from "./classes/blocks"

export const model = [
  new TitleBlock('Website builder on pure JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '700px',
      height: '200px'
    },
    alt: 'Abstract picture',
  }),

  new ColumnsBlock([
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga?', 
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quasi hic quo accusantium.', 
    'Тут так же рыба текст. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, eveniet saepe.',
  ], {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      }
  }),

  new TextBlock('Hire we go with some test text for text field.', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    }
  }),
];