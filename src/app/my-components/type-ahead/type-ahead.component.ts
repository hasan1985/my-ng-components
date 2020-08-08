import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-type-ahead',
    templateUrl: './type-ahead.component.html',
    styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent implements OnInit {

    @Input() wordList: string[];

    constructor() { }

    ngOnInit(): void {
    }

    public value: string = "";
    public filteredList = [];
    public showDropdown = false;

    public onKey(event: any): void {
        this.value = event.target.value;
        this.filteredList = [];
        for (let w of this.wordList) {
            if (w.substr(0, this.value.length) === this.value) {
                this.filteredList.push(w);
            }
        }
    }

    public onFocus(): void {
        this.filteredList = this.wordList;
        this.showDropdown = true;
    }

    public onFocusOut(): void {
        this.showDropdown = false;
    }

}
