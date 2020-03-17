import { Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  xValue: number = 0;
  yValue: number = 0;
  height: number = 50;
  width: number = 50;
  
  onDragEnded(event) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    // if((boundingClientRect.x - parentPosition.left) >= 0 &&(boundingClientRect.y - parentPosition.top) >= 0){
      this.xValue = (boundingClientRect.x - parentPosition.left);
      // this.yValue = (boundingClientRect.y - parentPosition.top)+12.6527557373046875;
      this.yValue = (boundingClientRect.y - parentPosition.top);

    // }
    console.log('x: ' + this.xValue, 'y: ' + this.yValue);        
  }
  
  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    
    // if(x >= 0 && y >= 0){
      return { top: y, left: x};
    // }

    // function offsetBottom(el, i) { i = i || 0; return $(el)[i].getBoundingClientRect().bottom}
  }
  showCoords(event){
    let x = event.clientX;
    let y = event.clientY;
    console.log("coordinates",x);
  }
}
