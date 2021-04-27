import { Directive, Input, ViewContainerRef, TemplateRef, Host, OnChanges, ViewChildren, QueryList, DoCheck, ContentChildren, ElementRef } from '@angular/core';

class switchCaseInfo {
  matchCondition: any;
  viewContainer: ViewContainerRef;
  templateRef: TemplateRef<Object>;
  isDefault: boolean;
  hasBreak: boolean;
}

@Directive({selector: '[appMySwitchCase]'})
export class MySwitchCase implements OnChanges { 

  @Input() 
  appMySwitchCase: any;
  
  @Input() 
  hasBreak: boolean;
  
  @Input() 
  isDefault: boolean;

  constructor(public viewContainer: ViewContainerRef, 
    public elementRef: ElementRef,
    public templateRef: TemplateRef<Object>,
    @Host() private appMySwitch: MySwitch) {

    }

  ngOnChanges() {
    console.log("ngOnChanges");
    this.appMySwitch.updateCases();
  }
}

@Directive({selector: '[appMySwitch]'})
export class MySwitch {

  @ContentChildren(MySwitchCase) 
  private switchCases: QueryList<MySwitchCase>;
  
  @Input() 
  public appMySwitch

  ngAfterViewInit() {
    // viewChildren is set
    console.log("in ngAfterViewInit this.switchCases", this.switchCases);
    this.updateCases();
  }

  public updateCases(): void {
    console.log("in updateCases this.switchCases", this.switchCases);
    if (this.switchCases) {
      let showDefault = true;
      for (let swithcCase of this.switchCases) {
        swithcCase.viewContainer.clear();
        if (swithcCase.appMySwitchCase === this.appMySwitch) {
          swithcCase.viewContainer.createEmbeddedView(swithcCase.templateRef);
          if (swithcCase.hasBreak) {
            break;
            showDefault = false;
         }
        }
      }


      if (showDefault) {
        for (let swithcCase of this.switchCases) {
          if (swithcCase.isDefault) {
            swithcCase.viewContainer.createEmbeddedView(swithcCase.templateRef);            
          }
        }
      }
    
    }
  }
}


