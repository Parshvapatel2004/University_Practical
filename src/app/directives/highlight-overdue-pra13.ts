import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightOverduePra13]',
})
export class HighlightOverduePra13 implements OnInit {
  @Input() appHighlightOverduePra13: boolean = false;
  constructor(private el: ElementRef) {}
  ngOnInit() {
    if (this.appHighlightOverduePra13) this.el.nativeElement.style.color = 'red';
  }
}
