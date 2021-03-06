import {
  Component,
  ElementRef,
  ViewEncapsulation,
  Renderer
} from '@angular/core';

import { BaseDynamicComponent } from './base-dynamic-component';

/**
 * Represents the modal backdrop shaped by CSS.
 */
@Component({
  selector: 'css-backdrop',
  host: {
    '[attr.class]': 'cssClass',
    '[attr.style]': 'styleStr'
  },
  encapsulation: ViewEncapsulation.None,
  template: ``
})
export class CSSBackdrop extends BaseDynamicComponent {

  constructor(el: ElementRef, renderer: Renderer) {
    super(el, renderer);
    this.activateAnimationListener();

    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    };
    Object.keys(style).forEach( k => this.setStyle(k, style[k]) );
  }
}
