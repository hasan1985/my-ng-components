import { Directive, Input, ViewContainerRef, TemplateRef, Host, OnChanges, ViewChildren, QueryList, DoCheck, ContentChildren, ElementRef, ChangeDetectorRef, Self } from '@angular/core';

/** usage - 
    <div [appMySwitch]="this.targetCondition">

        <div *appMySwitchCase = "this.toMatchCondition_1">
            case : {{this.toMatchCondition_1}}
            <div [appMySwitch]="'nested condition 2'" style="padding-left: 6px;">
                <div *appMySwitchCase = "'nested condition 1'">nested case: nested condition 1</div>
                <div *appMySwitchCase = "'nested condition 2'">nested case: nested condition 2</div>
            </div>
        </div>
        
        <div *appMySwitchCase = "this.toMatchCondition_2; break: breakForMatchCondition_2">
            <!-- this converts to 
                <ng-template 
                    [appMySwitchCase]="this.toMatchCondition_2" 
                    [appMySwitchCaseBreak]="breakForMatchCondition_2">
                </ng-template> 
            -->
            case : {{this.toMatchCondition_2}} 
        </div>
        
        <div *appMySwitchCase = "this.toMatchCondition_2">
            case : {{this.toMatchCondition_2}}
        </div>
        
        <div *appMySwitchDefault>
            case: default
        </div>
        
    </div>
 */

class SwitchCaseBase implements OnChanges {
  constructor(public viewContainer: ViewContainerRef,
              public templateRef: TemplateRef<Object>,
              public appMySwitch: MySwitch) {
  }

  ngOnChanges() {
    this.appMySwitch.updateCases();
  }

  private shown = false;

  public showCase() {
    if (!this.shown) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.shown = true;
    }
  }

  public hideCase() {
    this.viewContainer.clear();
    this.shown = false;
  }
}

@Directive({selector: '[appMySwitchCase]'})
export class MySwitchCase extends SwitchCaseBase {

  @Input() appMySwitchCase: any;
  @Input() appMySwitchCaseBreak: boolean;

  constructor(public viewContainer: ViewContainerRef,
              public templateRef: TemplateRef<Object>,
              @Host() public appMySwitch: MySwitch) { // it will work even without @Host

      // read about @Host decorator - 
      // https://indepth.dev/posts/1063/a-curious-case-of-the-host-decorator-and-element-injectors-in-angular
      // https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658
      super(viewContainer, templateRef, appMySwitch);
    }
}

@Directive({selector: '[appMySwitchDefault]'})
export class MySwitchDefault  extends SwitchCaseBase {
  constructor(public viewContainer: ViewContainerRef,
              public templateRef: TemplateRef<Object>,
              @Host() public appMySwitch: MySwitch) { // it will work even without @Host

    super(viewContainer, templateRef, appMySwitch);
  }
}

@Directive({selector: '[appMySwitch]'})
export class MySwitch {

  /*
    "viewChild" is from html that is translated-to or produced by the component (i.e. component's template)
    @component({selector : "ex-component", template: "this is view child elements"})

    "contentChild" is from the original html (where the component is invoked)
    <ex-component>this is content child elements</ex-component>
  */
  
  @ContentChildren(MySwitchCase) private switchCases: QueryList<MySwitchCase>;
  @ContentChildren(MySwitchDefault) private switchDefaults: QueryList<MySwitchDefault>;
  
  @Input() public appMySwitch: any;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.updateCases();
  }

  ngAfterViewInit() {
    // viewChildren is set after view init
    this.updateCases();
  }

  public updateCases(): void {
    let showDefault = true;
    let hitBreak = false;
    if (this.switchCases) {
      for (let switchCase of this.switchCases) {
        if (!hitBreak && switchCase.appMySwitchCase === this.appMySwitch) {          
          switchCase.showCase();
          showDefault = false;

          if (switchCase.appMySwitchCaseBreak) {
            hitBreak = true;  
          }

        } else {
          switchCase.hideCase();
        }
      }
    }

    if (this.switchDefaults) {
      for (let defaults of this.switchDefaults) {
        if (showDefault) {
          defaults.showCase();
        } else {
          defaults.hideCase();
        }
      }
    }
    this.changeDetector.detectChanges();
  }
}

// also look at - https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_switch.ts

/**
 * Important topic
 * ViewContainerRef
 * TemplateRef
 * @ContentChildren
 * @ViewChildren
 * How to extend TS/JS class
 * @host, @self
 * Structural syntanxt
 */